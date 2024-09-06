import React from 'react';
import Pizza from './Pizza';

function Menu() {
   const pizzaData = [
      {
         name: 'Focaccia',
         ingredients: 'Bread with italian olive oil and rosemary',
         price: 6,
         photoName: './images/pizzas/focaccia.jpg',
         soldOut: false,
      },
      {
         name: 'Pizza Margherita',
         ingredients: 'Tomato and mozarella',
         price: 10,
         photoName: './images/pizzas/margherita.jpg',
         soldOut: false,
      },
      {
         name: 'Pizza Spinaci',
         ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
         price: 12,
         photoName: './images/pizzas/spinaci.jpg',
         soldOut: false,
      },
      {
         name: 'Pizza Funghi',
         ingredients: 'Tomato, mozarella, mushrooms, and onion',
         price: 12,
         photoName: './images/pizzas/funghi.jpg',
         soldOut: false,
      },
      {
         name: 'Pizza Salamino',
         ingredients: 'Tomato, mozarella, and pepperoni',
         price: 15,
         photoName: './images/pizzas/salamino.jpg',
         soldOut: true,
      },
      {
         name: 'Pizza Prosciutto',
         ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
         price: 18,
         photoName: './images/pizzas/prosciutto.jpg',
         soldOut: false,
      },
   ];
   return (
      <main className="flex flex-col items-center gap-y-5 w-fit">
         <h2 className="text-center text-xl/9 uppercase font-bold border-y-2 border-black w-fit mt-12">
            our menu
         </h2>
         <ul className='flex flex-wrap w-fit items-center justify-center gap-16  mt-10'>
            {pizzaData.map((pizza) => (
               <Pizza key={pizza.name} pizza={pizza} />
            ))}
         </ul>
         
      </main>
   );
}

export default Menu;
