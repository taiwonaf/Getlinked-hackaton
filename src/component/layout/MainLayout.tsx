import React from "react";
import Nav from "../nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
