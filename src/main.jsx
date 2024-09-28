import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from "./Components/Body/Body.jsx";
import Certificates from "./Components/Certificates/Certificates.jsx";
import Projects from "./Components/Projects/Projects.jsx";

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
        element: <Projects />,
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
