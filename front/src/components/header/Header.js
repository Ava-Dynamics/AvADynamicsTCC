import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { IoIosFingerPrint } from "react-icons/io";
import { LiaFacebook, LiaInstagram, LiaYoutube } from "react-icons/lia";

function Header({ children }) {
  const [pageName, setPageName] = useState("Dashboard");

  const getCurrentPage = (page) => {
    setPageName(page);
  };

  return (
    <div className="antialiased min-h-screen flex flex-col">
      <div className="flex-1 px-7 md:px-10 xl:px-28 2xl:px-72 bg-white">
        <Navbar menuType="dashboard" getPage={getCurrentPage} />
        <div className="min-h-14 bg-finscoreLightBlue flex">
          <span className="text-white text-3xl pt-[10px] pl-14 uppercase">
            {pageName}
          </span>
        </div>
        <div className="mt-12 mb-20">{children}</div>
      </div>
      <footer className="bg-finscoreLightBlue text-white py-8 px-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-5">
            <IoIosFingerPrint className="text-5xl" />
            <span className="md:text-3xl lg:text-4xl text-2xl">FINSCORE</span>
          </div>
          <div className="flex gap-10 mt-4 md:mt-0">
            <a href="#sobre" className="hover:underline">
              SOBRE
            </a>
            <a href="#duvidas" className="hover:underline">
              DÚVIDAS FREQUENTES
            </a>
            <a href="#curso" className="hover:underline">
              SUGIRA UM CURSO
            </a>
            <a href="#funcionalidade" className="hover:underline">
              SUGIRA UMA FUNCIONALIDADE
            </a>
          </div>
          <div className="flex items-center gap-5 mt-4 md:mt-0">
            <span className="mr-2">Acompanhe-nos:</span>
            <LiaInstagram className="cursor-pointer text-3xl hover:text-gray-300" />
            <LiaFacebook className="cursor-pointer text-3xl hover:text-gray-300" />
            <LiaYoutube className="cursor-pointer text-3xl hover:text-gray-300" />
          </div>
        </div>
        <div className="text-center mt-10">
          <span>© 2024 - FinScore. All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default Header;
