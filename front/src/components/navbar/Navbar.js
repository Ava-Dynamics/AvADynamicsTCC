import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosFingerPrint } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../index.css";
import { NavbarItems } from "./navbar-items";
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
    element.scrollIntoView({ behavior: "smooth" });
  };

  const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogged");
    await signOut();
    navigate("/");
  };

  useEffect(() => {
    const currentItem = menu.findIndex(
      (item) => item.url === location.pathname,
    );
    if (currentItem !== -1) {
      setActiveMenu(currentItem);
      getPage(menu[currentItem].text);
    }
  }, [location, menu, getPage]);

  return (
    <div className="relative flex justify-between items-center py-10">
      <div className="flex gap-5 items-center">
        <IoIosFingerPrint className="text-zinc-500 md:text-4xl lg:text-4xl" />
        <Link to="/">
          <span
            className={`md:text-2xl lg:text-3xl text-xl ${
              menuType === "dashboard" ? "text-finscoreLightBlue" : ""
            }`}
          >
            FINSCORE
          </span>
        </Link>
      </div>
      {!hideMenu ? (
        <>
          <div className="md:flex gap-10 items-center hidden">
            {menu.map((item, index) => (
              <div key={index}>
                {item.type === "link" ? (
                  <span
                    className={`${
                      menuType === "dashboard"
                        ? "text-finscoreLightBlue hover:opacity-70"
                        : ""
                    }
                     ${
                       activeMenu === index && menuType === "dashboard"
                         ? "text-stone-950 hover:opacity-70"
                         : ""
                     }
                    cursor-pointer hover:text-finscoreLightBlue transition duration-300 ease-in-out md:text-sm lg:text-lg`}
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
                    onClick={() => {redirectToAuth()}}
                  >
                    Login
                  </div>
                )}
              </div>
            ))}
          </div>
          {menuType === "dashboard" && (
            <div
              onClick={logout}
              className="cursor-pointer flex items-center gap-2"
            >
              <CgProfile className="text-4xl text-finscoreLightBlue cursor-pointer" />
              <span className="uppercase hover:text-black text-finscoreLightBlue">
                {userName}
              </span>
            </div>
          )}
          <div className="md:hidden">
            <RxHamburgerMenu
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
              size="2em"
            />
          </div>
          <div className={`md:hidden mobile-menu ${menuOpen ? "open" : ""}`}>
            <div
              className="absolute top-10 left-4 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <BiChevronLeft size="3em" />
            </div>
            <div className="flex flex-col gap-14 text-2xl">
              {menu.map((item, index) => (
                <span key={index} onClick={() => scrollToDiv(item.id)}>
                  {item.text}
                </span>
              ))}
              {menuType === "dashboard" && (
                <div
                  onClick={logout}
                  className=" cursor-pointer flex items-center gap-2"
                >
                  <CgProfile
                    onClick={logout}
                    className="text-3xl cursor-pointer"
                  />
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
