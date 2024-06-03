import React, { useState } from "react";
import Navbar from "../navbar/Navbar";

function Dashboard() {
  const [pageName, setPageName] = useState("dashboard");

  const getCurrentPage = (page) => {
    setPageName(page);
  };

  return (
    <div className="antialiased min-h-screen h-full px-7 md:px-10 xl:px-28 2xl:px-72 bg-white">
      <Navbar menuType="dashboard" getPage={getCurrentPage} />
      <div className="min-h-16 bg-finscoreLightBlue flex">
        <span className="text-white text-3xl pt-3 pl-14 uppercase">
          {pageName}
        </span>
      </div>
    </div>
  );
}

export default Dashboard;
