import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import LoginImg from "../assets/Login.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';



export default function CustomerProfile() {
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: " ",
            password: ""
        }
    });
    // toast.info("Display a dark notification of type info");
    // console.log(errors)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='h-full w-full object-cover' src={LoginImg} alt="" />
            </div>

            <div className="bg-gray-100 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-white p-6" onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                })} >
                    <h2 className="text-4xl   font-bold text-center py-6">ABC Bank</h2>
                    <div className="flex flex-col py-2 ">
                        <label>Email</label>
                        <input className="border p-2 border-blue-200" {...register("email", { required: 'This is required' })} type="email" />
                        {errors.email?.message}
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Password</label>
                        <input className="border p-2 border-blue-200" {...register("password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })} type="password" />
                        {errors.password?.message}
                    </div>
                    {/* <Link to="/home"> */}
                    {/* <input type="submit" /> */}
                    <button type="submit" className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white" >Sign In
                    </button>
                    {/* </Link>  */}
                    <div className="flex justify-between">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember Me</p>
                        <p>Create an account</p>
                    </div>
                </form>
            </div>
        </div>
    )
};