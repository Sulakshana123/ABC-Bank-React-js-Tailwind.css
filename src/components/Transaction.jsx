import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
    // console.log(user1.accounts)
    
    const accountlist = user1.accounts;
    console.log(accountlist)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            accNumber: "",
            amount: "",
            date_Time: "",
            type: "",
            destinationAccID: "",
            // userType: ""
        }
        
    });

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
            url: "http://localhost:8090/transaction",
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
            alert(res.data);
            // if (res.status == 200) {
            //     alert('Successfully Transfered')
            // } else { alert('Please enter valied details') }
        }).catch((err => {
            // if (err.name == 'AbortError') {
                alert('Error: '+err.name)
                console.log('fetch aborted');
            // } else {
            //     setIsPending(false);
            //     setError(err.message);
            // }
        }));
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
                <form className="max-w-[400px] w-full mx-auto bg-white p-6" onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){CreateTransaction()}else(alert('please fill the fields'))
                })}>
                    <h2 className="text-4xl   font-bold text-center py-2">ABC Bank</h2>
                    <h2 className="text-2xl    text-center py-6">Transaction</h2>
                    <div className="flex flex-col py-2">
                        <div>
                            <label>Account Number</label>
                            <div class="relative flex w-full">
                                <select class="block w-full py-3 pl-4 pr-8 bg-white border border-gray-300 rounded-sm appearance-none cursor-pointer focus:outline-none hover:border-gray-400" {...register("accNumber", { required: {value:true,message:'This is required'} })} onChange={(e) => setaccNumber(e.target.value)}>
                                   <option>------</option>
                                    {/* <option value="customer">Customer</option> */}
                                    {accountlist.map((account)=>
                                    (<option value={account.accNumber}>{account.accNumber}</option>))}
                                    {/* <option value="employee">Bank Employee</option> */}

                                </select>
                               
                                <div class="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
                                    <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col py-2 ">
                        <label>Account Number</label>
                        <input {...register("accNumber", { required: {value:true,message:'This is required'},pattern:{value: /^[a-zA-Z0-9]||[a-zA-Z0-9]||[A-z]/,message:"Invalid Account Number"} })} onChange={(e) => setaccNumber(e.target.value)} className="border p-2 border-blue-200" type="text"  />
                        {errors.accNumber?.message}
                    </div> */}
                    <div className="flex flex-col py-2 ">
                        <label> Amount</label>
                        <input {...register("amount", { required: {value:true,message:'This is required'},pattern:{value: /([0-9])\d+/,message:"please enter only number"} })} onChange={(e) => setamount(e.target.value)} className="border p-2 border-blue-200" type="text"  />
                        {errors.amount?.message}
                    </div>
                    <div className="flex flex-col py-2 ">
                        <label> Transfer Account Number</label>
                        <input {...register("destinationAccID", { required: {value:true,message:'This is required'} })}  onChange={(e) => setdestinationAccID(e.target.value)} className="border p-2 border-blue-200" type="text"  />
                        {errors.destinationAccID?.message}
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Date/Time</label>
                        <input {...register("date_Time", { required: {value:true,message:'This is required'} })} onChange={(e) => setdate_Time(e.target.value)} className="border p-2 border-blue-200" type="datetime-local"  />
                        {errors.date_Time?.message}
                    </div>
                   
                    <button type="submit" className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white">Trasaction</button>

                </form>
            </div>
        </div>
    )
};

