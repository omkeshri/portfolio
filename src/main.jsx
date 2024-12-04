import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Shimmer from "./Components/ShimmerPage/Shimmer.jsx";

const Body = lazy(() => import("./Components/HomePage/Body/Body.jsx"));
const LightBody = lazy(() => import("./LightComponents/HomePage/Body/Body.jsx"));
const Certificates = lazy(() => import("./Components/CertificatePage/Certificates.jsx"));
const LightCertificates = lazy(() => import("./LightComponents/CertificatePage/Certificates.jsx"));
const Projects = lazy(() => import("./Components/ProjectPage/Project.jsx"));
const LightProjects = lazy(() => import("./LightComponents/ProjectPage/Project.jsx"));

const currentTheme = localStorage.getItem("theme")|| "dark";

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
            {currentTheme === "dark" ? <Body />: <LightBody />}
          </Suspense>
        ),
      },
      {
        path: "/certificates",
        element: (
          <Suspense fallback={<Shimmer />}>
            {currentTheme === "dark" ?<Certificates />: <LightCertificates />}
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Shimmer />}>
            {currentTheme === "dark" ?<Projects />: <LightProjects />}
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
