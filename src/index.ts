import {PrismaClient} from "@prisma/client"
import dotenv from 'dotenv'
import express, {Express, Request, Response} from 'express'

import { SnackData } from "./interfaces/SnackData"
import { CustomerData } from "./interfaces/CustomerData"
import { PaymentData } from "./interfaces/PaymentData"
import CheckoutService from "./services/CheckoutService"

dotenv.config()

const prisma = new PrismaClient()

const app: Express = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get("/", (req: Request, res: Response)=> {
    res.send("hello World")
})

app.get("/snacks", async (req: Request, res: Response) => {
    const { snack } = req.query

    if(!snack) return res.status(400).send({ error: "Snack is required" })

    const snacks = await prisma.snack.findMany({

        where:{
            snack: snack as string
        }
    })

    res.send(snacks)
})

app.get("/orders/:id", async (req: Request, res: Response) => {
    const { id } = req.params

    const order = await prisma.order.findUnique({
        where:{
            id: parseInt(id)
        },
        include: { customer: true, orderItems: { include: { snack: true }}}
    })

    if(!order) return res.status(404).send({ error: "Order not found" })

    res.send(order)
})

interface CheckoutRequest extends Request {
    body: {
        cart: SnackData[]
        customer: CustomerData
        payment: PaymentData
    }
}

app.post('/checkout', async (req: Request, res: Response) => {
    const { cart, customer, payment } = req.body

    const checkoutService = new CheckoutService()

    await checkoutService.process(cart, customer, payment)

    res.send({ message: "checkout completed"})
})

app.listen(port, () => {
    console.log(`Server running on port ${port} -  localhost:${port}`)
})