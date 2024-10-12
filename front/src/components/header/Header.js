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
      {/* Main content wrapper */}
      <div className="flex-1 px-4 md:px-10 xl:px-28 2xl:px-72 bg-white">
        <Navbar menuType="dashboard" getPage={getCurrentPage} />
        <div className="min-h-14 bg-finscoreLightBlue flex">
          <span className="text-white text-2xl md:text-3xl pt-[10px] pl-4 md:pl-14 uppercase">
            {pageName}
          </span>
        </div>
        <div className="mt-8 md:mt-12 mb-16 md:mb-20">{children}</div>
      </div>

      {/* Footer */}
      <footer className="bg-finscoreLightBlue text-white py-6 md:py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 md:gap-5 mb-4 md:mb-0">
            <IoIosFingerPrint className="text-4xl md:text-5xl" />
            <span className="text-2xl md:text-3xl lg:text-4xl">FINSCORE</span>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-left">
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

          {/* Social media icons */}
          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-5 mt-4 md:mt-0">
            <span className="text-sm md:text-base">Acompanhe-nos:</span>
            <div className="flex gap-4">
              <LiaInstagram className="cursor-pointer text-2xl md:text-3xl hover:text-gray-300" />
              <LiaFacebook className="cursor-pointer text-2xl md:text-3xl hover:text-gray-300" />
              <LiaYoutube className="cursor-pointer text-2xl md:text-3xl hover:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="text-center mt-6 md:mt-10">
          <span>© 2024 - FinScore. All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default Header;
