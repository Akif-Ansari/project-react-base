import React from "react";
import Home from "./pages/home";
import { RouterProvider } from "react-router";
import routes from "./routes";
const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
