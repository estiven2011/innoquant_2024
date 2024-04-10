import React from "react";
import "../home/home.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import img_sobre_nostros from "../../assets/sobreNosotros.png";

function Home() {
  return (
    <div className=" ppal">
      <div className=" fondoHome h-[60vh] w-full flex justify-start items-center text-white">
        <div className=" xl:w-[40%] md:w-[55%] sm:w-[50%] ml-20 mr-6">
          <div>
            <h1 className=" pb-5 text-2xl xl:text-[1.5rem] md:text-2xl sm:text-2xl font-semibold ">
              SERVICIO DE COTIZACION ARQUITECTONICA
            </h1>
            <p className=" text-lg p-5 pl-0">
              Lorem ipsum dolor sit,amet consectetur adipisicing elit. Id illo
              similique delectus nostrum quos a unde, ipsa cum ipsum
              necessitatibus totam omnis dicta modi ab cupiditate. Ratione
              facilis velit illum.
            </p>
            <form action="" className=" flex mt-6">
              <button className=" bg-[#4265ac] w-[60%] py-1 rounded-2xl text-start px-5 flex items-center justify-between hover:animate-slide-out-right">
                Contactanos{" "}
                <IoIosArrowRoundForward className=" text-[1.8rem]" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* En pantallas md, se ponga la imagen encima del texto  */}

      {/* Sobre nosotros */}
      <section className=" sobre-nosotros">
        <div className=" m-12">
          <div className=" text-center">
            <h1 className="text-[2rem] font-bold sobre_nosotros">
              Sobre Nosotros
            </h1>
            <div className=" parrafos flex m-8 gap-8 justify-center flex-col lg:flex-row pt-2 lg:justify-center">
              <img
                src={img_sobre_nostros}
                className=" flex xl:w-[40%] lg:w-[45%] lg:h-[20%] md:w-[60%] sm:w-[60%] object-cover mb-4 md:mb-0 self-center"
              />
              <div className="Objetivos w-full md:w-[70%] lg:w-[50%] text-[1rem] self-center">
                <p className=" pb-5 xl:text-[1.1rem] lg:text-[1rem] md:text-[1.2rem] sm:text-[1.1rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  explicabo quia accusamus commodi asperiores impedit nihil
                  officiis rem veritatis mollitia sit inventore, rerum a
                  consequuntur, magnam iusto, nostrum ipsa iure!
                </p>
                <h1 className=" pb-2 font-bold text-[1.2rem]">Misión</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  asperiores eveniet, repellendus vitae adipisci, quod commodi
                  voluptas nisi{" "}
                </p>
                <h1 className=" pt-5 font-bold text-[1.2rem] ">Vision</h1>
                <p className=" pt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem at consequatur vel vero consectetur doloribus quae
                  soluta quis repellendus. Quos fuga odit minus maiores corporis
                  nisi exercitationem dolor rem repellendus?
                </p>
                <h1 className=" pt-5 font-bold text-[1.2rem] ">Alcance</h1>
                <p className=" pt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error fugit quam expedita incidunt! Reprehenderit odio dolor
                  eos amet? Quo enim quos aut magnam eius perferendis ratione
                  asperiores alias iure labore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" cards-ppal">
        <div className=" text-center font-bold text-[2rem] bg-gray-400 h-[80vh] w-full">
          <h1 className=" p-4">Cards</h1>
          <div className=" cards-all flex flex-wrap gap-5">
            <div class="card-1 border-4 border-black block rounded-lg bg-gray-300">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6 text-surface text-black">
                <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                <p class="mb-4 text-base">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  class="inline-block rounded bg-blue-300 px-6 pb-2 pt-2.5 text-xs font-medium text-black "
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Button
                </button>
              </div>
            </div>
            <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6 text-surface dark:text-white">
                <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                <p class="mb-4 text-base">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}

export default Home;
