import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/main.css";
import Home from "./pages/Home/Home.tsx";
import Orders from "./pages/Orders/Orders.tsx";
import { DashboardLayout } from "./components/Layout/Layouts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/history",
    element: (
      <DashboardLayout>
        <h1>History</h1>,
      </DashboardLayout>
    ),
  },
  {
    path: "/statistics",
    element: (
      <DashboardLayout>
        <h1>Statistiques</h1>,
      </DashboardLayout>
    ),
  },
  {
    path: "/messages",
    element: (
      <DashboardLayout>
        <h1>Messages</h1>,
      </DashboardLayout>
    ),
  },
  {
    path: "/account",
    element: (
      <DashboardLayout>
        <h1>Compte</h1>,
      </DashboardLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <DashboardLayout>
        <h1>Settings</h1>,
      </DashboardLayout>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
