import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


export default function Createu() {
    const [uFName, setuFName] = useState('');
    const [uLName, setuLName] = useState('');
    const [address, setaddress] = useState('');
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setuserType] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            uFName: "",
            uLName: "",
            address: "",
            userEmail: "",
            // password: "Password",
            // userType: ""
        }
        
    });
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
    const CreateUser = (e) => {
        console.log("uFName", uFName)
        console.log("uLName", uLName)
        console.log("address", address)
        console.log("userEmail", userEmail)
        console.log("password", password)
        console.log("userType", userType)
        console.log("jwt", jwt)
        // const url = 'http://localhost:8090/createuser'
        axios({
            method: "post",
            url: "http://localhost:8090/createuser",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            data: {
                uFName: uFName,
                uLName: uLName,
                address: address,
                userEmail: userEmail,
                password: password,
                userType: userType
            },
            // withCredentials: true,
            mode: "cors",
        }).then((res) => {
            console.log("response", res)
            if(res.status==200){
                alert('Successfully Added')
            }
        })
    }
    console.log(errors)
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
                    <a href="/viewuser" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-200 hover:bg-blue-900 mt-4 lg:mt-0">User List</a>
                </div>
            </nav>


            <div className="bg-gray-100 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-white p-6" onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){CreateUser()}else(alert('please fill the fields'))
                })}>
                    <h2 className="text-4xl   font-bold text-center py-2">ABC Bank</h2>
                    <h2 className="text-2xl    text-center py-3">User</h2>
                    <div className="flex flex-col py-2 ">
                        <label>First Name</label>
                        <input className="border p-2 border-blue-200"  {...register("uFName", { required: {value:true,message:'This is required'} })} onChange={(e) => setuFName(e.target.value)} type="text" />
                        {errors.uFName?.message}
                    </div>
                    <div className="flex flex-col py-2 ">
                        <label>Last Name</label>
                        <input className="border p-2 border-blue-200"  {...register("uLName", { required: {value:true,message:'This is required'}
                         })} onChange={(e) => setuLName(e.target.value)} type="text" />
                        {errors.uLName?.message}
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Email</label>
                        <input className="border p-2 border-blue-200"  {...register("userEmail", { required: {value:true,message:'This is required'} })} type="email" onChange={(e) => setEmail(e.target.value)} />
                        {errors.userEmail?.message}
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Address</label>
                        <input className="border p-2 border-blue-200"  {...register("address", { required: {value:true,message:'This is required'} })} onChange={(e) => setaddress(e.target.value)} type="text" />
                        {errors.address?.message}
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Password</label>
                        <input className="border p-2 border-blue-200"  {...register("password", { required: {value:true,message:'This is required'},min:{value: 3, message: 'Minimum Leanth is 6 characters'} })} onChange={(e) => setPassword(e.target.value)} type="password" />
                        {errors.password?.message}
                    </div>
                    {/* <div className="flex flex-col py-2">
                <label>Date</label>
                <input className="border p-2 border-blue-200"  type="datetime-local" />
            </div> */}
                    <div className="flex flex-col py-2">
                        <div>
                            <label>User Type</label>
                            <div class="relative flex w-full">
                                <select class="block w-full py-3 pl-4 pr-8 bg-white border border-gray-300 rounded-sm appearance-none cursor-pointer focus:outline-none hover:border-gray-400" required {...register("userType", { required: 'This is required' })} onChange={(e) => setuserType(e.target.value)}>
                                    <label>User Type</label>
                                    <option>------</option>
                                    <option value="customer">Customer</option>
                                    <option value="employee">Bank Employee</option>

                                </select>
                                {errors.userType?.message}
                                <div class="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
                                    <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white">Add User</button>

                </form>
            </div>
        </div>
    )
};

