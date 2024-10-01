import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from "./Components/HomePage/Body/Body.jsx";
import Certificates from "./Components/CertificatePage/Certificates.jsx";
import Project from "./Components/ProjectPage/Project.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
        <App />
    </RouterProvider>
  </StrictMode>
);
