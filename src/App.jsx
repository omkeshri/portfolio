import "./scrollbar.css";
import Header from "./Components/Common/Header/Header";
import LightHeader from "./LightComponents/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import LightFooter from "./LightComponents/Common/Footer/Footer";
import { Outlet, Route, Routes, ScrollRestoration } from "react-router-dom";
import { useState } from "react";

function App() {

  const setTheme = () => {
    localStorage.getItem("theme") === "light" ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");
  }

  const currentTheme = localStorage.getItem("theme") || "dark";

  return (
    currentTheme === "dark" ? (
      <div className="relative bg-body overflow-hidden">
        <Header setTheme = {() => setTheme()}/>
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    ) : (
      currentTheme === "light" && (
        <div className="relative bg-white overflow-hidden">
          <LightHeader setTheme = {() => setTheme()}/>
          <ScrollRestoration />
          <Outlet />
          <LightFooter />
        </div>
      )
    )
  );
}

export default App;
