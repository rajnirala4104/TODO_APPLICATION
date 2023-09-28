import React, { Fragment, Suspense, useEffect } from "react";
import { getLogedUsers } from "../api/services";

export const User = () => {
   useEffect(() => {
      (async () => {
         const response = await getLogedUsers();
         console.log(response);
      })();
   }, []);

   return (
      <Fragment>
         <Suspense fallback="loading.."></Suspense>
      </Fragment>
   );
};
