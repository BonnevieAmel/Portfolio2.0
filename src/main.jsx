import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Blog from "./pages/Blog.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/ProjectsPage",
        element: <ProjectsPage />,
      },
      {
        path: "/ProjectPage/:id",
        element: <ProjectPage />,
      },
      {
        path: "/ContactPage",
        element: <ContactPage />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
