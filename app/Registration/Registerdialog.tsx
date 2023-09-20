"use client";

import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const Registerdialog: React.FC = () => {
  return (
    <div
      className="mx-auto max-w-2xl pt-0 pb-64 lg:max-w-7xl lg:px-8"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <img
          src="https://78.media.tumblr.com/50d43db43843a7dc2fbb93c660a1d0dc/tumblr_ozar2dfRQI1rh3rypo1_1280.gif"
          alt="My image"
          className="float-right"
          style={{
            width: "500px",
            height: "35rem",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        ></img>
        <div
          className="space-y-10"
          style={{
            backgroundColor: "#ffc1cc",
            padding: "40px",
            height: "35rem",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/assets/logo/Logo.svg"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div style={{ padding: "5px" }}>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div style={{ padding: "5px" }}>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div style={{ padding: "5px" }}>
                <label htmlFor="password" className="sr-only">
                  Re-Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Re-Enter Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  By register you agree with our
                  <span className="p-color me-1">terms and conditions</span>and
                  <span className="p-color ms-1">privacy policy</span>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerdialog;

// -------------------------------------------------------------------------------------------- //
//  IMPORTANT: Version 2 form pop up Register form (this is the original of the code above)     //
// -------------------------------------------------------------------------------------------- //
// Owner: Fancy

// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'
// import { LockClosedIcon } from '@heroicons/react/20/solid'

// const Register = () => {
//     let [isOpen, setIsOpen] = useState(false)

//     const closeModal = () => {
//         setIsOpen(false)
//     }

//     const openModal = () => {
//         setIsOpen(true)
//     }

//     return (
//         <>
//             <div classNameName="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
//                 <div classNameName='hidden md:block'>
//                     <button classNameName="bg-purple hover:bg-purple hover:text-white text-white text-15px font-medium ml-8 py-4 px-5 rounded" onClick={openModal}>
//                         Register
//                     </button>
//                 </div>
//             </div>

//             <Transition appear show={isOpen} as={Fragment}>
//                 <Dialog as="div" classNameName="relative z-10" onClose={closeModal}>
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div classNameName="fixed inset-0 bg-black bg-opacity-25" />
//                     </Transition.Child>

//                     <div classNameName="fixed inset-0 overflow-y-auto">
//                         <div classNameName="flex min-h-full items-center justify-center p-4 text-center">
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="ease-out duration-300"
//                                 enterFrom="opacity-0 scale-95"
//                                 enterTo="opacity-100 scale-100"
//                                 leave="ease-in duration-200"
//                                 leaveFrom="opacity-100 scale-100"
//                                 leaveTo="opacity-0 scale-95"
//                             >
//                                 <Dialog.Panel classNameName="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

//                                     <div classNameName="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//                                         <div classNameName="w-full max-w-md space-y-8">
//                                             <div>
//                                                 <img
//                                                     classNameName="mx-auto h-12 w-auto"
//                                                     src="/assets/logo/Logo.svg"
//                                                     alt="Your Company"
//                                                 />
//                                                 <h2 classNameName="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//                                                     Register your account
//                                                 </h2>
//                                             </div>
//                                             <form classNameName="mt-8 space-y-6" action="#" method="POST">
//                                                 <input type="hidden" name="remember" defaultValue="true" />
//                                                 <div classNameName="-space-y-px rounded-md shadow-sm">
//                                                     <div>
//                                                         <label htmlFor="email-address" classNameName="sr-only">
//                                                             Email address
//                                                         </label>
//                                                         <input
//                                                             id="email-address"
//                                                             name="email"
//                                                             type="email"
//                                                             autoComplete="email"
//                                                             required
//                                                             classNameName="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                                             placeholder="Email address"
//                                                         />
//                                                     </div>
//                                                     <div>
//                                                         <label htmlFor="password" classNameName="sr-only">
//                                                             Password
//                                                         </label>
//                                                         <input
//                                                             id="password"
//                                                             name="password"
//                                                             type="password"
//                                                             autoComplete="current-password"
//                                                             required
//                                                             classNameName="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                                             placeholder="Password"
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div classNameName="flex items-center justify-between">
//                                                     <div classNameName="flex items-center">
//                                                         <input
//                                                             id="remember-me"
//                                                             name="remember-me"
//                                                             type="checkbox"
//                                                             classNameName="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                                         />
//                                                         <label htmlFor="remember-me" classNameName="ml-2 block text-sm text-gray-900">
//                                                             Remember me
//                                                         </label>
//                                                     </div>

//                                                 </div>

//                                                 <div>
//                                                     <button
//                                                         type="submit"
//                                                         classNameName="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                                                     >
//                                                         <span classNameName="absolute inset-y-0 left-0 flex items-center pl-3">
//                                                             <LockClosedIcon classNameName="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
//                                                         </span>
//                                                         Register Now
//                                                     </button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>

//                                     {/* <div classNameName="mt-4 flex justify-end">
//                                         <button
//                                             type="button"
//                                             classNameName="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
//                                             onClick={closeModal}
//                                         >
//                                             Got it, thanks!
//                                         </button>
//                                     </div> */}
//                                 </Dialog.Panel>
//                             </Transition.Child>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition>
//         </>
//     )
// }

// export default Register;
