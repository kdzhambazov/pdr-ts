import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayoutPage from "./pages/LayoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
