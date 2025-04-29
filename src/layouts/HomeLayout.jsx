import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
