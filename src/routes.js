import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Pricing from "./pages/pricing";
import HomeLayout from "./layouts/HomeLayout";
import ProductsPage from "./pages/productsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { path: "/", Component: Home, index: true },
      { path: "/about", Component: About },
      { path: "/services", Component: Services },
      { path: "/pricing", Component: Pricing },
      { path: "/product", Component: ProductsPage },
    ],
  },
]);

export default routes;
