import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../Shared/Nav/Nav";

const HomeLayout = () => {
  return (
    <div className="max-w-full mx-auto min-h-screen bg-gray-900">
      <Nav />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
