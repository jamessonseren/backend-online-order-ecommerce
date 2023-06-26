import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const snacks = [
    {
        snack: "burger",
        name: "Mega",
        description: "Tamanho artesanal família recheado com três carnes suculentas, queijo e bacon.",
        price: 7.75,
        image: "https://i.imgur.com/L5IhOun.png"
      },
      {     
       snack: "burger",
        name: "Big Burger Bacon",
        description: "Criado para os amantes e bacon, possui em todas as camadas bacon bem assado.",
        price: 8.25,
        image: "https://i.imgur.com/3ccsTEQ.jpeg"
      },
      {
        snack: "Desserts",
        name: "Cookie Dough",
        description: "It makes for a fun appetizer or dessert for any party, bridal or baby shower, or a yummy snack to share!  Give it a try!  It is AMAZING!",
        price: 9.75,
        image: "https://i.imgur.com/bFH4vVe.jpeg"
      },
      {
        snack: "Desserts",
        name: "Snickers Dip",
        description: "This Snickers Dip is the perfect sweet appetizer to feed a crowd! And well, it’s an easy sweet dip made of Snickers. How can that not be amazing?",
        price: 6.85,
        image: "https://i.imgur.com/5sjJrIb.jpeg"
      },
      {
        snack: "Desserts",
        name: "Lemon Cream Cheese",
        description: "The easiest cream cheese fruit dip, this Lemon Cream Cheese Fruit Dip has marshmallow creme and cream cheese, plus lemon yogurt to give it the best lemon flavor.",
        price: 7.10,
        image: "https://i.imgur.com/yaARGHk.jpeg"
      },
      {
        snack: "Drinks",
        name: "Vanilla Vodka",
         description: "Delicious drink with Whiskey, Apple Juice, and Pinch of Ground Cinnamon",
         price: 8.5,
         image: "https://i.imgur.com/fIf86bh.jpeg"
       },
       {
         snack: "Drinks",
         name: "Amazing Apple Juice",
         description: "Apple juice with ginger beer, seltzer, and bourbon",
         price: 6.85,
         image: "https://i.imgur.com/NOZtMV3.png"
       },
       {
         snack: "Drinks",
         name: "Special Orang Juice",
         description: "Orange juice with maple syrup and angostura bitters.",
         price: 7.10,
         image: "https://i.imgur.com/j1zL2pB.jpeg"
       },
       {
        snack: "Pizza",
        name: "Pepperoni",
        description: "Brazilian style food with pepperoni, cheese, and onions",
        price: 9.56,
        image: "https://media.istockphoto.com/id/1314368528/pt/foto/brazilian-style-pizza-with-mozzarella-cheese-pepperoni-sausage-and-onion-top-view.webp?s=1024x1024&w=is&k=20&c=D99g39zgfKcblIVeCA_n5YjKRR6luulHpgZXE0M0Bxw="
      },
      {
        snack: "Pizza",
        name: "Margherita",
        description: "Delicious italian Margherita pizza with tomatoes and cheese",
        price: 9.85,
        image: "https://media.istockphoto.com/id/1414575281/pt/foto/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?s=1024x1024&w=is&k=20&c=0z2tURHptlwSCz_r33U8y_1z7K5cge-3wX2BACdOi_Y="
      },
      {
        snack: "Pizza",
        name: "Bacon and Brocolli",
        description: "Delicious Bacon and Brocolli Pizza",
        price: 8.15,
        image: "https://media.istockphoto.com/id/1390950332/pt/foto/bacon-and-broccoli-pizza.webp?s=1024x1024&w=is&k=20&c=jb0sOS2TLx3gMVpGpum5kkrTxRJh8CTvLOjgmpuyAeA="
      }
  
   
]
async function main(){
    await prisma.snack.createMany({
        data: snacks,
        skipDuplicates: true
    })
}

main()
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })