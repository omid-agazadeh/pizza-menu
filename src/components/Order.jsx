function Order({ closeHour, openHour }) {
   return (
      <div>
         <p>
            we're open from {openHour}:00 to{closeHour}:00. come vist us or order online.
         </p>
         <button className="bg-yellow-500 py-3 px-8 mt-6">order</button>
      </div>
   );
}

export default Order;
