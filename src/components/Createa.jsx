import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Createa() {
    const [uID, setuID] = useState('');
    const [balance, setbalance] = useState('');
    const [cOD, setcOD] = useState('');
    
// <<<<<<< sula


//  export default function Createa(){
    
// =======
    var jwt = localStorage.getItem("jwt")
    const userObj1 = localStorage.getItem('user1')
    const user1 = JSON.parse(userObj1);
    const navigate = useNavigate();
    const back = (e) => {
        if (user1.userType == 'admin') {
            console.log("type: Admin")
            navigate("/home");
            // navigator('/home')
        } else if (user1.userType == 'employee') {
            console.log("type: employee")
            navigate("/bankemployee");
        } else if (user1.userType == 'customer') {
            console.log("type: customer")
            navigate("/customer");
        }
    }
    const CreateAccount = (e) => {
        console.log("uID", uID)
        console.log("balance", balance)
        console.log("cOD", cOD)

        console.log("jwt", jwt)
        // const url = 'http://localhost:8080/createuser'
        axios({
            method: "post",
            url: "http://localhost:8080/createaccount",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Authorization": `Bearer ` + jwt 
            },
            data: {
                uID: uID,
                balance: balance,
                cOD: cOD
            },
            // withCredentials: true,
            mode: "cors",
        }).then((res) => {
            console.log("response", res)
        })
    }
// >>>>>>> main
    return (
        <div className='grid grid-cols-1  h-screen w-full'>
            <nav class="flex items-center justify-between flex-wrap bg-indigo-800 p-6 h-16">
                <div class="flex space-x-4">
                    <button onClick={back}>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <a href="/viewaccount" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-200 hover:bg-blue-900 mt-4 lg:mt-0">Account List</a>
                </div>
            </nav>


            <div className="bg-gray-100 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-white p-6">
                    <h2 className="text-4xl   font-bold text-center py-2">ABC Bank</h2>
                    <h2 className="text-2xl    text-center py-6">Account</h2>

                    <div className="flex flex-col py-2 ">
                        <label>Account Balance</label>
                        <input className="border p-2 border-blue-200" onChange={(e) => setbalance(e.target.value)} type="text" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label>User ID</label>
                        <input className="border p-2 border-blue-200" onChange={(e) => setuID(e.target.value)} type="text" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label>COD</label>
                        <input className="border p-2 border-blue-200" onChange={(e) => setcOD(e.target.value)} type="text" />
                    </div>

                    <button type="button" className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white" onClick={CreateAccount}>Add Account</button>

                </form>
            </div>

            
           
        {/* </form> */}
    </div>
    // </div>

    //     </div>

    )
};
