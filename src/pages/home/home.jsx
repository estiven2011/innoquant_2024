import React from 'react'
import "../home/home.css"


function Home() {
  return (
    <div className=' fondoHome h-[60vh] w-full flex items-center text-white '>
        <div className=' xl:w-[30%] md:w-[40%] sm:w-[65%] ml-20 mr-4'>
          <div>
            <h1 className=' mt-7 pb-3 text-2xl xl:text-3xl md:text-2xl sm:text-2xl '>SERVICIO DE COTIZACION ARQUITECTONICA</h1>
            <p>Lorem ipsum dolor sit,amet consectetur adipisicing elit. Id illo similique delectus nostrum quos a unde,   ipsa cum ipsum necessitatibus totam omnis dicta modi ab cupiditate. Ratione facilis velit illum.
            </p>
            <button> Ver Más</button>
          </div>
        </div>
    </div>
  )
}

export default Home