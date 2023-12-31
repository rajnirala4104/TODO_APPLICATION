import { createBrowserRouter } from "react-router-dom";
import { Home, Root, User } from "../pages";

export const _ROUTER = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <User />,
         },
         {
            path: "/user/:user_id",
            element: <Home />,
         },
      ],
   },
]);
