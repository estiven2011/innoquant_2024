import React from 'react'
import "../home/home.css"


function Home() {
  return (
    <div className=' fondoHome h-[60vh] w-full flex items-center text-white'>
        <div className=' w-[30%] ml-24'>
            <h1 className=' text-[2.9rem]'>SERVICIO DE COTIZACION ARQUITECTONICA</h1>
            <p>Lorem ipsum dolor sit,
                 amet consectetur adipisicing elit. Id illo similique delectus nostrum quos a unde, 
                 ipsa cum ipsum necessitatibus totam omnis dicta modi ab cupiditate. Ratione facilis velit illum.</p>
        </div>
        <div className=''>
        <button> Ver Más</button>
        </div>
    </div>
  )
}

export default Home