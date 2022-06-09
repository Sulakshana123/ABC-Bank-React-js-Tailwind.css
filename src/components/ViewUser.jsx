import React from "react";
import { Link } from "react-router-dom";


 export default function ViewUser(){
    return (
        <div className='grid grid-cols-1  h-screen w-full'>
             <nav class="flex items-center justify-between flex-wrap bg-indigo-800 p-6 h-16">
             <div class="flex space-x-4">
            <Link to="/home">
             <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                 <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
            </svg>
            </Link>
             </div>
          
             </nav>
             <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
          </thead>
          <tbody maxWidth="150px">
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">list</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             #
              </td>
              <td>
              <button type="button" className="border w-36 h-9 my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white">Account View
              </button>
              <button type="button" className="border w-36 h-9 my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white">Delete
              </button>
              </td>
              
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">list</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            #
              </td>
             
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">list</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              #
              </td>
              
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">list</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             #
              </td>
              
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">list</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              #
              </td>
              
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">list</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             #
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


        
   
    )
};

