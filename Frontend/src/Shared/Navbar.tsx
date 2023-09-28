import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
   return (
      <section className="bg-blue-200 sticky top-0 flex flex-col items-center lg:h-[50px] lg:flex-row lg:justify-between lg:px-5">
         <Link to="/" className="text-red-500 text-4xl">
            <span className="font-mono text-blue-900">todo</span>
            <span className="text-4xl ">.</span>
         </Link>
      </section>
   );
};
