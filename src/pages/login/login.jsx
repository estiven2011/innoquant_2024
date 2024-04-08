import React from "react";
import "../login/login.css";

function login() {
  return (
    <div className=" ppal-login w-full">
      <div className="navbar-login h-[10vh]"></div>
      <div className=" flex justify-center">
        <div className=" conten-ppal-login flex justify-center h-[80vh] m-8 items-center w-[90%] ">
          <div className=" conten-letf w-[50%] bg-[#CED4DA] rounded-l-2xl ">
            <div className=" w-full bg-[#171824] h-[80vh] rounded-br-[60px] rounded-l-2xl">
              jj
            </div>
          </div>

          <div className=" conten-right w-[50%] bg-[#171824] rounded-r-2xl shadow-[80px] ">
            <div className=" w-full bg-[#CED4DA] h-[80vh] rounded-tl-[60px] rounded-r-2xl">

              <section class=" flex justify-center  text-black">
                <div class="flex flex-col items-center justify-center w-[70%] mt-10">
                  <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 class="text-xl font-bold leading-tight tracking-tight ">
                        Sign in to your account
                      </h1>
                      <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-black"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg  block w-full p-2.5 "
                            placeholder="name@company.com"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-black"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                            required=""
                          />
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded  "
                                required=""
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label
                                for="remember"
                                class="text-gray-500 dark:text-gray-300"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          class="w-full text-black bg-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                          Sign in
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet?{" "}
                          <a
                            href="#"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Sign up
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
