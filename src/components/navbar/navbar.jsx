import React from 'react'
import imgNavbar from '../../assets/pexels-energepiccom-110469.jpg'
import "../navbar/navbar.css"
import { CiUser } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (



<div className=" fondo w-full flex  text-white font-semibold relative text-[1rem]"  >
<div className=' flex w-full justify-between absolute mt-5 '>
  <h1 className=' ml-2 text-[1.9rem]'>INNOCUAN</h1>
  <ul className=' gap-10 flex justify-center '>
    <NavLink to="/">
    <li>Home</li>
    </NavLink>
    <NavLink>
    <li>Nosotros</li>
    </NavLink>
    <NavLink to="/contacto">
    <li>Contacto</li>
    </NavLink>
    <NavLink>
    <li>Servicios</li>
    </NavLink>
  </ul>
  <ul className=' gap-10 flex'>
    <li className=' '><FaUser className=' text-[1.5rem] font-semibold' /></li>
    <li></li>
  </ul>
  </div>
</div>

  );
}

export default Navbar