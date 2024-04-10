import React from 'react'
import "../register/register.css"

function register() {
  return (
    <div className=' ppal-register w-full'>
      <div className=' '></div>
      <div className=" flex justify-center">
        <div className=" conten-ppal-login flex justify-center h-auto m-8 items-center w-[90%] ">
          <div className=" conten-letf w-[50%] bg-[#394948] rounded-l-2xl   ">
            <div className=" w-full bg-[#CED4DA] h-[100vh] rounded-tr-[60px] rounded-l-2xl">
              <section class=" ppal-form-register flex justify-center h-[100vh] text-black">
                <div class="flex flex-col items-center justify-center w-[70%] ">
                  <div class="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black h-auto  ">
                    <div class=" form-login p-6 space-y-4 md:space-y-6 sm:p-8 shadow-sm items-center ">
                      <h1 class="text-xl font-bold leading-tight tracking-tight  pb-2">
                        Crear Cuenta
                      </h1>
                      <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label for="" class="block mb-1 text-sm font-medium text-black">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                            placeholder="Nombre Completo"
                            required=""
                          />
                        </div>
                        <div>
                          <label for="" class="block mb-1 text-sm font-medium text-black">
                            Primer Apeliido
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                            placeholder="Primer Apellido"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            for="email"
                            class="block mb-1 text-sm font-medium text-black"
                          >
                            Segundo Apellido 
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                            placeholder="Segundo Apellido"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            for=""
                            class="block mb-1 text-sm font-medium text-black"
                          >
                            Celular
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                            placeholder="Numero de celular"
                            required=""
                          />
                        </div>
                        <div>
                          <label for="password" class="block mb-1 text-sm font-medium text-black">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                            required=""
                          />
                        </div>
                        {/* <div>
                          <label for="" className="block mb-1 text-sm font-medium text-black">Rol</label>
                          <input type="text" 
                            name="email"
                            id="email"
                            class="text-black sm:text-sm border-gray-500 block w-full p-1.5 border-b-2  focus:outline-none pl-0 "
                            placeholder="correo@gmail.com"
                            required="" />
                          
                        </div>
 */}
                        <div className=" flex justify-center">
                          <button type="submit" class="w-[80%] text-white bg-[#171824] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:shadow-2xl ">
                            Crear
                          </button>
                        </div>
                        <p class="text-sm font-light text-gray-600  flex justify-center">
                          Ya tienes cuenta?{" "}
                          <a href="/login" class="font-medium text-primary-600  dark:text-primary-500 hover:text-[#171824]">
                            Iniciar Sesion
                          </a>
                        </p>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              
            </div>
          </div>

          <div className=" conten-right w-[50%] bg-[#CED4DA] rounded-r-2xl shadow-[80px] hidden lg:block">
            <div className=" w-full fondo-register h-[100vh] rounded-bl-[60px] rounded-r-2xl">

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default register