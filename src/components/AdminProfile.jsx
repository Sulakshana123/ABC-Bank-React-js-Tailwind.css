import React from "react";
import { Link } from "react-router-dom";



export default function AdminProfile() {
    const userObj1 = localStorage.getItem('user1')
    const user1 = JSON.parse(userObj1);
    console.log(user1)
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
            <div>
                <p>uID : {user1.uID}</p>
                <p>uFName : {user1.uFName}</p>
                <p>uLName : {user1.uLName}</p>
                <p>address : {user1.address}</p>
                <p>userEmail : {user1.userEmail}</p>
                <p>password : {user1.password}</p>
                <p>userType : {user1.userType}</p>
                <p>accNumber : {user1.accounts[user1.accounts.length-1].accNumber}</p>
            </div>
        </div>
        
        

    )
};

