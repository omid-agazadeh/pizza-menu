function Pizza({ pizza }) {
   console.log(pizza);

   return (
      <li className="flex gap-x-6">
         <img className="w-36 aspect-square " src={pizza.photoName} alt={pizza.name} />
         <div className="flex flex-col gap-y-2 w-64">
            <h2 className="font-medium text-2xl/8">{pizza.name}</h2>
            <p className=" tracking-wider font-medium ">{pizza.ingredients}</p>
            <span className="mt-5">{pizza.price}</span>
         </div>
      </li>
   );
}

export default Pizza;
