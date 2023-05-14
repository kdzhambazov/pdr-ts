import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import OrderPage from "./pages/OrderPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "categories/:categoryId",
        element: <CategoryPage />
      },
      {
        path: "order",
        element: <OrderPage />
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
