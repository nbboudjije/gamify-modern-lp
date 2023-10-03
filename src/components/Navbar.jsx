import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);

    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="w-full absolute h-[50px] z-10 p-2">
      {open ? (
        <div className="text-black flex w-full h-screen bg-white justify-center items-center ease-in-out duration-300 fixed left-0 top-0">
          <button
            className="p-3 text-white bg-purple-500 rounded-lg absolute top-5 right-5"
            onClick={openMenu}
          >
            Exit
          </button>
          <ul>
            <li className="flex flex-col text-4xl">
              <a
                className="p-3 my-1 border hover:border-b-purple-400 text-center"
                href=""
              >
                Home
              </a>
              <a
                className="p-3 my-1 border  text-center hover:border-b-purple-400"
                href=""
              >
                About
              </a>
              <a
                className="p-3 my-1 border text-center hover:border-b-purple-400"
                href=""
              >
                Service
              </a>
              <a
                className="p-3 my-1 border  text-center hover:border-b-purple-400"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="max-w-[1240px] mx-auto flex justify-between items-center ">
          <h1 className="text-white text-3xl">Gamify</h1>
          <button className="p-3 text-white  rounded-lg" onClick={openMenu}>
            <FaBars size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
