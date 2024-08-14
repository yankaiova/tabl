import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Уупс...</div>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);
