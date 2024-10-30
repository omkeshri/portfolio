import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shimmer from "./Components/ShimmerPage/Shimmer.jsx";

const Body = lazy(() => import("./Components/HomePage/Body/Body.jsx"));
const Certificates = lazy(() => import("./Components/CertificatePage/Certificates.jsx"));
const Project = lazy(() => import("./Components/ProjectPage/Project.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Shimmer />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/certificates",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Certificates />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Project />
          </Suspense>
        ),
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
