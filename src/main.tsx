import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout.tsx";
import "./styles/main.css";
import Home from "./pages/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orders",
    element: (
      <Layout>
        <h1>Orders</h1>,
      </Layout>
    ),
  },
  {
    path: "/history",
    element: (
      <Layout>
        <h1>History</h1>,
      </Layout>
    ),
  },
  {
    path: "/statistics",
    element: (
      <Layout>
        <h1>Statistiques</h1>,
      </Layout>
    ),
  },
  {
    path: "/messages",
    element: (
      <Layout>
        <h1>Messages</h1>,
      </Layout>
    ),
  },
  {
    path: "/account",
    element: (
      <Layout>
        <h1>Compte</h1>,
      </Layout>
    ),
  },
  {
    path: "/settings",
    element: (
      <Layout>
        <h1>Settings</h1>,
      </Layout>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
