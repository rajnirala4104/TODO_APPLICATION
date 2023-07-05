import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { _ROUTER } from "./routes";

function App() {
  return <RouterProvider router={_ROUTER} />;
}

export default App;
