import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";

export const Root = () => {
   return (
      <React.Fragment>
         <Navbar />
         <Outlet />
      </React.Fragment>
   );
};
