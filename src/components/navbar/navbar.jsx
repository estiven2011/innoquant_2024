import React from 'react'
import imgNavbar from '../../assets/pexels-energepiccom-110469.jpg'
import "../navbar/navbar.css"
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (



<div className=" fondo w-full flex  mt-5 relative"  >
<div className=' flex w-full justify-between absolute '>
  <img src="" alt="" />
  <ul className=' gap-10 flex justify-center '>
    <li>Home</li>
    <li>Nosotros</li>
    <li>Contacto</li>
    <li>Servicios</li>
  </ul>
  <ul className=' gap-10 flex'>
    <li className=' '><CiUser/></li>
    <li></li>
  </ul>
  </div>
</div>

  );
}

export default Navbar