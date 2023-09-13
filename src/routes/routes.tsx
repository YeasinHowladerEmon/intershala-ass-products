import { createBrowserRouter } from "react-router-dom";

import ProductDetails from "../components/pages/ProductDetails";

import Home from "../components/pages/Home";
import MainLayout from "../layouts/MainLayout";


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/product-details/:id',
          element: <ProductDetails />,
        }
      ],
    },
  ]);
  
  export default routes;