import pizzaData from '../data/data';
import Pizza from './Pizza';

function Menu() {
   return (
      <main className="flex flex-col items-center gap-y-5 w-fit">
         <h2 className="text-center text-xl/9 uppercase font-bold border-y-2 border-black w-fit mt-12">our menu</h2>
         {pizzaData.length > 0 ? (
            <>
               <p className="w-[500px] text-center">
                  Authentic italian cuisine. 6 ceative dishes to choose from.All from our stone oven, all orhanic,all
                  delicious
               </p>
               <ul className="flex flex-wrap w-fit items-center justify-center gap-16  mt-10">
                  {pizzaData.map((pizza) => (
                     <Pizza key={pizza.name} pizza={pizza} />
                  ))}
               </ul>
            </>
         ) : (
            <p>we're still working on our menu. Please come back later:</p>
         )}
      </main>
   );
}

export default Menu;
