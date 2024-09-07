function Pizza({ pizza }) {
   return (
      <li className={`flex gap-x-6 ${pizza.soldOut?"text-gray-500 grayscale":null}`}>
         <img className={`w-36 aspect-square`} src={pizza.photoName} alt={pizza.name} loading="lazy"  />
         <div className="flex flex-col gap-y-2 w-64">
            <h2 className="text-2xl/8">{pizza.name}</h2>
            <p className=" tracking-wider ">{pizza.ingredients}</p>
            <span className={`mt-5 text-xl font-semibold`}>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
         </div>
      </li>
   );
}

export default Pizza;
