import React, { Fragment, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { _ROUTER } from "./routes";

function App() {
   return (
      <Fragment>
         <Suspense fallback="loading..">
            <RouterProvider router={_ROUTER} />
         </Suspense>
      </Fragment>
   );
}

export default App;
