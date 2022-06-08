import React from "react";
import HomeImg from "../assets/bank1.webp"
import bankImg from "../assets/bank.webp"
import bankImg1 from "../assets/bank2.webp"

export default function Customer(){
    return (
      <div className='grid grid-cols-1  h-screen w-full'>
      <nav class="flex items-center justify-between flex-wrap bg-indigo-800 p-6 h-20">
      <div class="flex items-center flex-shrink-0 text-white mr-6">

        <span class="font-semibold text-xl tracking-tight">Customer</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
            Home
          </a>
          <a href="/adminprofile" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
            Profile
          </a>
          <a href="/withdraw" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
            Withdraw
          </a>
          <a href="/deposit" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
            Deposit
          </a>
          <a href="/transaction" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
            Transaction
          </a>
        </div>
        <div>
        <a href="/" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-200 hover:bg-blue-900 mt-4 lg:mt-0">Log Out</a>
        </div>
      </div>
    </nav>
    <div className='justify-center'>
              {/* <img className='max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl'src={LoginImg} alt=""/> */}
              <div class="grid grid-cols-3 gap-4 flex items-center">
  <div class="mb-4">
    <img src={ HomeImg } class="max-w-full h-auto rounded-lg" alt=""/>
 </div>

  <div class="mb-4">
   <img src={ bankImg } class="max-w-full h-auto rounded-lg" alt=""/>
 </div>
  <div class="mb-4">
  <img src={ bankImg1 } class="max-w-full h-auto rounded-lg" alt=""/>
  </div>
  </div>
     </div>

    </div>
       

  )
};

