import React from 'react'
import './servicio.css'
import Servicios1 from '../../assets/servicios1.jpg'

function servicios() {
  return (
    <div className=' ppal-servicios'>
      <div className=' hero-servicio fondo-servicio h-[60vh] w-full text-white flex items-center'>
        <div className=" xl:w-[40%] md:w-[55%] sm:w-[50%] ml-20 mr-6">
          <div>
            <h1 className=" pb-5 text-2xl xl:text-[1.5rem] md:text-2xl sm:text-2xl font-semibold ">
              SERVICIOS
            </h1>
            <p className=" text-xl p-5 pl-0">
              Lorem ipsum dolor sit,amet consectetur adipisicing elit. Id illo
              similique delectus nostrum quos a unde, ipsa cum ipsum
              necessitatibus totam omnis dicta modi ab cupiditate. Ratione
              facilis velit illum.
            </p>
          </div>
        </div>
      </div>

      <section>
        <div className=' conteiner-ppal-all h-20 m-5'>
          <div className=' container1 flex border-2 border-black w-full rounded-md'>
            <div className='servicio1-img flex w-[50%]'>
              <img src={Servicios1} className=' rounded-md' />
            </div>
            <div className=' servicio1-info m-5 w-[50%]'>
              <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit dicta velit adipisci fugit fugiat ea praesentium debitis quo vero quae qui odio labore incidunt tenetur delectus, excepturi sapiente soluta!
              
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum itaque aut, enim fugiat adipisci pariatur animi quasi repudiandae nemo neque excepturi optio explicabo quo beatae placeat esse deserunt officia quam.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default servicios