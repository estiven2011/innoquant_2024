import React from 'react'
import imgNavbar from '../../assets/pexels-energepiccom-110469.jpg'
import "../navbar/navbar.css"
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (



<div className=" fondo w-full flex  mt-5"  >
  <div className='  '>
   
  <ul className=' w-full gap-10 flex '>
    <li>Home</li>
    <li>Nosotros</li>
    <li>Contacto</li>
    <li>Servicios</li>
  </ul>
  <ul>
    <li><CiUser/></li>
    <li></li>
  </ul>
  </div>
</div>

  );
}

export default Navbar