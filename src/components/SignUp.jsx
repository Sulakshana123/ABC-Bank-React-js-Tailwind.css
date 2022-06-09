import React from "react";
import { Link } from "react-router-dom";


 export default function SignUp(){
    return (
        <div className='grid grid-cols-1  h-screen w-full'>
             <nav class="flex items-center justify-between flex-wrap bg-indigo-800 p-6 h-16">
             <div class="flex space-x-4">
            <Link to="/">
             <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                 <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
            </svg>
            </Link>
             </div>
           
             </nav>


        <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-6">
            <h2 className="text-4xl   font-bold text-center py-2">ABC Bank</h2>
            <h2 className="text-2xl    text-center py-3">Sign Up</h2>
            <div className="flex flex-col py-2 ">
                <label>First Name</label>
                <input className="border p-2 border-blue-200"  type="text"/>
            </div>
            <div className="flex flex-col py-2 ">
                <label>Last Name</label>
                <input className="border p-2 border-blue-200"  type="text"/>
            </div>
            <div className="flex flex-col py-2">
                <label>Email</label>
                <input className="border p-2 border-blue-200"  type="email" />
            </div>
            <div className="flex flex-col py-2">
                <label>Address</label>
                <input className="border p-2 border-blue-200"  type="text" />
            </div>
            <div className="flex flex-col py-2">
                <label>Password</label>
                <input className="border p-2 border-blue-200"  type="password" />
            </div>
            
            
            <button className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white">Add User</button>
            
        </form>
    </div>
    </div>
    )
};

