import React from "react";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" w-full text-white font-semibold fixed text-[1rem] ">
      <div className=" flex w-full justify-between absolute mt-5 ">
        <h1 className=" ml-4 mt-0 text-xl">INNOQUANT</h1>
        <ul className=" gap-10 md:flex hidden justify-center ">
          <NavLink to="/" >
            <li className=" hover:border-b-2">Inicio</li>
          </NavLink>
          <NavLink>
            <li className=" hover:border-b-2">Nosotros</li>
          </NavLink>
          <NavLink to="/contacto">
            <li className=" hover:border-b-2">Contacto</li>
          </NavLink>
          <NavLink>
            <li className=" hover:border-b-2">Servicios</li>
          </NavLink>
        </ul>
        <ul className="gap-10 md:flex hidden mr-5">
          <NavLink>
            <li className="">
              <FaUser className=" text-[1.5rem] font-semibold" />
            </li>
          </NavLink>
        </ul>
      </div>
      <NavLink>
        <div className=" relative flex justify-end">
          <RxHamburgerMenu className=" md:hidden mr-5 text-[1.5rem] font-semibold absolute mt-5 hover:animate-pop" />
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
