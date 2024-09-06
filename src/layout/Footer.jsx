import React from 'react';

function Footer() {
   const hour = new Date().getHours();
   const isOpen = hour >= 12 && hour <= 22;
   console.log(isOpen);

   return <footer className="text-center mt-8 pb-16 font-semibold">{new Date().toLocaleString()} We're currently open! </footer>;
}

export default Footer;
