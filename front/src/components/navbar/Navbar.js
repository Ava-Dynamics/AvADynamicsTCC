import React, { useState } from "react"
import { BiChevronLeft } from "react-icons/bi"
import { IoIosFingerPrint } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import "../../index.css"
import { NavbarItems } from "./navbar-items"
import Modal from "../modal/Modal"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menu = NavbarItems

  const scrollToDiv = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative flex justify-between items-center py-10">
      <div className="flex gap-5 items-center">
        <IoIosFingerPrint className="text-zinc-500 text-5xl" />
        <span className="md:text-3xl lg:text-4xl text-2xl">FINSCORE</span>
      </div>
      <div className="md:flex gap-10 items-center hidden">
        {menu.map((item, index) => (
          <div key={index}>
            {item.type === "link" ? (
              <span
                className="cursor-pointer hover:text-finscorePurple transition duration-300 ease-in-out md:text-md lg:text-xl"
                onClick={() => scrollToDiv(item.id)}
              >
                {item.text}
              </span>
            ) : (
              <Modal
                className="cursor-pointer hover:text-finscorePurple transition duration-300 ease-in-out md:text-md lg:text-xl"
                title="LOGIN"
              />
            )}
          </div>
        ))}
      </div>
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
          <span>SOBRE</span>
          <span>FUNCIONALIDADES</span>
          <span>CONTATO</span>
          <span>LOGIN</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
