import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosFingerPrint } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../index.css";
import { NavbarItems } from "./navbar-items";
import NavbarProfile from "./navbar-profile";
import { signOut } from "supertokens-auth-react/recipe/session";
import { redirectToAuth } from "supertokens-auth-react";

function Navbar({ hideMenu = false, menuType = "home", getPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const menu = NavbarItems[menuType];
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.email.split("@")[0];

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Elemento com ID '${id}' não encontrado.`);
    }
  };

  const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogged");
    await signOut();
    navigate("/");
  };

  useEffect(() => {
    const currentItem = menu.findIndex((item) => item.url === location.pathname);
    if (currentItem !== -1) {
      setActiveMenu(currentItem);
      getPage(menu[currentItem].text);
    }
  }, [location, menu, getPage]);

  return (
    <div className="relative flex justify-between items-center py-4 md:py-10 px-4 md:px-10">
      {/* Logo and Title */}
      <div className="flex gap-4 items-center">
        <IoIosFingerPrint className="text-zinc-500 text-3xl md:text-4xl" />
        <Link to="/">
          <span
            className={`text-xl md:text-2xl lg:text-3xl ${
              menuType === "dashboard" ? "text-finscoreLightBlue" : ""
            }`}
          >
            FINSCORE
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      {!hideMenu ? (
        <>
          <div className="hidden md:flex gap-8 lg:gap-10 items-center">
            {menu.map((item, index) => (
              <div key={index}>
                {item.type === "link" ? (
                  <span
                    className={`cursor-pointer transition duration-300 ease-in-out ${
                      menuType === "dashboard"
                        ? "text-finscoreLightBlue hover:opacity-70"
                        : "hover:text-finscoreLightBlue"
                    } ${
                      activeMenu === index && menuType === "dashboard"
                        ? "text-stone-950 hover:opacity-70"
                        : ""
                    } text-sm md:text-md lg:text-lg`}
                    onClick={() => {
                      if (menuType !== "dashboard") scrollToDiv(item.id);
                      setActiveMenu(index);
                      navigate(item.url);
                    }}
                  >
                    {item.text}
                  </span>
                ) : (
                  <div
                    className="cursor-pointer hover:text-finscoreLightBlue transition duration-300 ease-in-out md:text-md lg:text-lg"
                    title="LOGIN"
                    onClick={() => {
                      redirectToAuth();
                    }}
                  >
                    Login
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Profile in Dashboard */}
          {menuType === "dashboard" && (
            <div className="hidden md:flex cursor-pointer items-center gap-2">
              <NavbarProfile logout={logout} />
              <span className="uppercase hover:text-black text-finscoreLightBlue">
                {userName}
              </span>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <RxHamburgerMenu
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
              size="2em"
              color="black"
            />
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-full bg-gray-500 z-10 transition-transform duration-300 ease-in-out md:hidden ${
              menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            <div
              className="absolute top-10 left-1 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <BiChevronLeft size="3em" />
            </div>
            <div className="flex flex-col gap-8 text-xl mt-40 px-4">
              {menu.map((item, index) => (
                <span
                  key={index}
                  className="cursor-pointer hover:text-finscoreLightBlue"
                  onClick={() => {
                    if (menuType !== "dashboard") scrollToDiv(item.id);
                    setMenuOpen(false);
                    setActiveMenu(index);
                    navigate(item.url);
                  }}
                >
                  {item.text}
                </span>
              ))}
              {menuType === "dashboard" && (
                <div className="cursor-pointer flex items-center gap-2">
                  <NavbarProfile logout={logout} />
                  <span>{userName}</span>
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Navbar;
