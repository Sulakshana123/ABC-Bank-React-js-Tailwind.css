import React, { useState } from "react";
import LoginImg from "../assets/Login.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';



export default function Login() {
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: " ",
            password: ""
        }
        
    });
    // const [isPending, setIsPending] = useState(false);
    // const history = useNavigate();

    const navigate = useNavigate();


    // const jsonauthres = {};

    const handleAuth = (e) => {
        console.log("login data", userEmail)
<<<<<<< HEAD
        const url = 'http://localhost:8090/authenticate'
=======

        const url = 'http://localhost:8080/authenticate'
>>>>>>> 645692851a3af2b41b04e23d8640acfe19b98b9d
        axios.post(url, {
            userEmail: userEmail,
            password: password
        }).then((res) => {
            console.log("response", res.data.body.jwt)
            console.log("user", res.data.body.user.uFName)
            localStorage.setItem('jwt', res.data.body.jwt)
            localStorage.setItem('user', res.data.body.user)
            localStorage.setItem('user1', JSON.stringify(res.data.body.user))
            console.log(res.data.body.user)
            console.log(JSON.stringify(res.data.body.user))
            localStorage.setItem('userid', res.data.body.user.uID)
            if (res.data.body.user.userType == 'admin') {
                console.log("type: Admin")
                alert('Wlecome ' + res.data.body.user.uFName)
                // toast('🦄 Wow so easy!', {
                //     // position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // });
                navigate("/home");
                // navigator('/home')
            } else if (res.data.body.user.userType == 'employee') {
                console.log("type: employee")
                alert('Wlecome ' + res.data.body.user.uFName)
                navigate("/bankemployee");
            } else if (res.data.body.user.userType == 'customer') {
                console.log("type: customer")
                alert('Wlecome ' + res.data.body.user.uFName)
                navigate("/customer");
            } else {
                console.log("type: invalid")
                alert("Wlecome")
            }
            // navigator("/home")

        })
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='h-full w-full object-cover' src={LoginImg} alt="" />
            </div>

            <div className="bg-gray-100 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-white p-6" onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){handleAuth()}else(alert('please fill the fields'))
                })}>
                    <h2 className="text-4xl   font-bold text-center py-6">ABC Bank</h2>
                    <div className="flex flex-col py-2 ">
                        <label>Email</label>
                        <input className="border p-2 border-blue-200" required {...register("email", { required: 'This is required' })} type="email" onChange={(e) => setEmail(e.target.value)} />
                        {errors.email?.message}
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Password</label>
                        <input className="border p-2 border-blue-200" {...register("password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })} type="password" required onChange={(e) => setPassword(e.target.value)} />
                        <p >{errors.password?.message}</p>
                    </div>
                    {/* <Link to="/home"> */}
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
