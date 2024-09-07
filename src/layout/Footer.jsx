import React from 'react';
import Order from '../components/Order';

function Footer() {
   const hour = new Date().getHours();
   const openHour = 12;
   const closeHour = 22;
   const isOpen = hour >= openHour && hour <= closeHour;


   return (
      <footer className="text-center mt-16 pb-16 font-semibold">
         {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour} />
         ) : (
            <p>
               we're happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
         )}
      </footer>
   );
}

export default Footer;
