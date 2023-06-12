import { useState } from "react";
import logo from "../../logo-vblog.png";
import { Input, Ripple, Carousel, initTE } from "tw-elements";
initTE({ Input, Ripple, Carousel });

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successfull");
      window.location.replace("http://localhost:3000/login");
    } else {
      alert("registration failed");
    }
  }
  return (
    // <div class='container mx-auto flex flex-wrap py-6'>
    //   <section class='w-full flex flex-col items-center px-3'>
    //     <form onSubmit={register}>
    //       <div class='space-y-12'>
    //         <div class='border-b border-gray-900/10 pb-12'>
    //           <h2 class='text-3xl font-semibold leading-7 text-gray-900 text-center'>
    //             Register
    //           </h2>

    //           <div class='mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
    //             <div class='sm:col-span-4'>
    //               <label
    //                 for='username'
    //                 class='block text-sm font-medium leading-6 text-gray-900'>
    //                 Username
    //               </label>
    //               <div class='mt-2'>
    //                 <div class='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
    //                   <input
    //                     type='text'
    //                     value={username}
    //                     onChange={(ev) => setUsername(ev.target.value)}
    //                     id='username'
    //                     class='block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
    //                     placeholder='Input your username'
    //                   />
    //                 </div>
    //               </div>
    //             </div>

    //             <div class='sm:col-span-4'>
    //               <label
    //                 for='password'
    //                 class='block text-sm font-medium leading-6 text-gray-900'>
    //                 Password
    //               </label>
    //               <div class='mt-2'>
    //                 <div class='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
    //                   <input
    //                     type='password'
    //                     id='password'
    //                     value={password}
    //                     onChange={(ev) => setPassword(ev.target.value)}
    //                     class='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
    //                     placeholder='Input your password'
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <button class='inline-block rounded bg-primbg my-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-accentbg hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
    //             Register
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </section>
    // </div>
    <section class='h-screen px-8'>
      <div class='h-full'>
        <div class='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
          <div class='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 mt-12'>
            <form onSubmit={register}>
              <div class='flex flex-row items-center justify-center '>
                <p class='mb-0 mr-4 text-lg'>Sign up</p>
              </div>

              {/* Separator */}
              <div class='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'></div>

              <div class='relative mb-6' data-te-input-wrapper-init>
                <input
                  type='text'
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                  id='username'
                  class='block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='Input your username'
                />
              </div>

              <div class='relative mb-6' data-te-input-wrapper-init>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  class='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='Input your password'
                />
              </div>

              <div class='text-center lg:text-left'>
                <button
                  class='inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                  data-te-ripple-init
                  data-te-ripple-color='light'>
                  Register
                </button>

                <p class='mb-0 mt-2 pt-1 text-sm font-semibold'>
                  Have a account?
                  <a
                    href={"/login"}
                    class='text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700'>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div class='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
            <img src={logo} class='w-full px-4 py-4' alt='Sample image' />
          </div>
        </div>
      </div>
    </section>
  );
}
