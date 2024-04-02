import React from 'react'
import "../home/home.css"


function Home() {
  return (
    <div className=' fondoHome h-[65vh] w-full flex items-center text-white'>
        <div className=' xl:w-[50%] md:w-[60%] sm:w-[65%] ml-20 mr-6'>
          <div>
            <h1 className=' mt-12 pb-5 pt-3 text-2xl xl:text-3xl md:text-2xl sm:text-2xl font-semibold'>SERVICIO DE COTIZACION ARQUITECTONICA</h1>
            <p className=' text-lg'>Lorem ipsum dolor sit,amet consectetur adipisicing elit. Id illo similique delectus nostrum quos a unde,   ipsa cum ipsum necessitatibus totam omnis dicta modi ab cupiditate. Ratione facilis velit illum.
            </p>
            <form action="" className=' flex justify-start py-4'>
              <button className=' bg-slate-500 px-10 py-1 rounded-full '>Ver mas...</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Home