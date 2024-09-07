import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home.jsx";
import CreateUser from "./Component/CreateUser.jsx";
import Upadate from "./Component/Upadate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=> fetch('http://localhost:5000/users')
      },
      {
        path: "/createuser",
        element: <CreateUser />,
      },
      {
        path: "/uapdate",
        element: <Upadate />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
