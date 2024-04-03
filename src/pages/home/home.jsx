import React from 'react'
import "../home/home.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import img_sobre_nostros from "../../assets/sobreNosotros.png"


function Home() {
  return (

    <div className=' ppal'>

      {/* Navbar, hero  */}
      <div className=' fondoHome h-[65vh] w-full flex items-center text-white'>
          <div className=' xl:w-[35%] md:w-[55%] sm:w-[50%] ml-20 mr-6'>
            <div>
              <h1 className=' pb-5 text-2xl xl:text-[1.5rem] md:text-2xl sm:text-2xl font-semibold mt-10'>SERVICIO DE COTIZACION ARQUITECTONICA</h1>
              <p className=' text-lg'>Lorem ipsum dolor sit,amet consectetur adipisicing elit. Id illo similique delectus nostrum quos a unde,   ipsa cum ipsum necessitatibus totam omnis dicta modi ab cupiditate. Ratione facilis velit illum.
              </p>
              <form action="" className=' flex mt-6'>
                <button className=' bg-[#10347e] w-[60%] py-1 rounded-2xl text-start px-5 flex items-center justify-between hover:animate-slide-out-right'>Contactanos <IoIosArrowRoundForward className=' text-[1.8rem]'/></button>
              </form>
            </div>
          </div>
      </div>

      {/* Sobre nosotros */}
      <section>
        <div className=' m-12'>
          <div className=' text-center'>
            <h1 className='text-[1.8rem] font-bold'>Sobre Nosotros</h1>
            <div className=' parrafo flex   m-8 gap-8 justify-center'>
              <img src={img_sobre_nostros}  className=' flex w-[50%] h-[30%]'/>
              <div className='Objetivos flex flex-col w-[50%] h-[50%] items-center'>
                <p className=' pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo quia accusamus commodi asperiores impedit nihil officiis rem veritatis mollitia sit inventore, rerum a consequuntur, magnam iusto, nostrum ipsa iure!</p>
                <h1 className=' pb-2 font-bold text-[1.2rem]'>Misión</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel asperiores eveniet, repellendus vitae adipisci, quod commodi voluptas nisi </p>
                <h1 className=' pt-5 font-bold text-[1.2rem] '>Vision</h1>
                <p className=' pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem at consequatur vel vero consectetur doloribus quae soluta quis repellendus. Quos fuga odit minus maiores corporis nisi exercitationem dolor rem repellendus?</p>
                <h1 className=' pt-5 font-bold text-[1.2rem] '>Alcance</h1>
                <p className=' pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fugit quam expedita incidunt! Reprehenderit odio dolor eos amet? Quo enim quos aut magnam eius perferendis ratione asperiores alias iure labore?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home