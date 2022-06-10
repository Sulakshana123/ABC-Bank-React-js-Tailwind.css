import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Transaction() {
    const [accNumber, setaccNumber] = useState('');
    const [amount, setamount] = useState('');
    const [date_Time, setdate_Time] = useState('');
    const [type, settype] = useState('');
    const [destinationAccID, setdestinationAccID] = useState('');
    var jwt = localStorage.getItem("jwt");
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

    const CreateTransaction = (e) => {
        console.log("accNumber", accNumber)
        console.log("amount", amount)
        console.log("date_Time", date_Time)
        console.log("type", type)
        console.log("destinationAccID", destinationAccID)
        settype('t')

        console.log("jwt", jwt)
        axios({
            method: "post",
            url: "http://localhost:8080/transaction",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Authorization": `Bearer ` + jwt
            },
            data: {
                accNumber: accNumber,
                amount: amount,
                date_Time: date_Time,
                type: "t",
                destinationAccID: destinationAccID
            },
            mode: "cors",
        }).then((res) => {
            console.log("response", res)
        })
    }
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
            </nav>



            <div className="bg-gray-100 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-white p-6">
                    <h2 className="text-4xl   font-bold text-center py-2">ABC Bank</h2>
                    <h2 className="text-2xl    text-center py-6">Transaction</h2>
                    <div className="flex flex-col py-2 ">
                        <label>Account Number</label>
                        <input onChange={(e) => setaccNumber(e.target.value)} className="border p-2 border-blue-200" type="text" />
                    </div>
                    <div className="flex flex-col py-2 ">
                        <label> Amount</label>
                        <input onChange={(e) => setamount(e.target.value)} className="border p-2 border-blue-200" type="text" />
                    </div>
                    <div className="flex flex-col py-2 ">
                        <label> Transfer Account Number</label>
                        <input onChange={(e) => setdestinationAccID(e.target.value)} className="border p-2 border-blue-200" type="text" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Date/Time</label>
                        <input onChange={(e) => setdate_Time(e.target.value)} className="border p-2 border-blue-200" type="datetime-local" />
                    </div>
                    <button type="button" onClick={CreateTransaction} className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white">Withdraw</button>

                </form>
            </div>
        </div>
    )
};

