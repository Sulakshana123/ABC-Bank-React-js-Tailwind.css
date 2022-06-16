import React, { useState } from "react";
import LoginImg from "../assets/Login.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import { useForm } from 'react-hook-form';




export default function Login() {
    const [userEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: " ",
            password: ""
        }
        
    }
    );
   
    // const [isPending, setIsPending] = useState(false);
    // const history = useNavigate();

    const navigate = useNavigate();


    // const jsonauthres = {};

    const handleAuth = (e) => {
        console.log("login data", userEmail);

        const url = 'http://localhost:8090/authenticate'
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
                        <input className="border p-2 border-blue-200" required {...register("email", { required: 'This is required',pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ })} type="email" onChange={(e) => setEmail(e.target.value)} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Password</label>
                        <input className="border p-2 border-blue-200" {...register("password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })} type="password" required onChange={(e) => setPassword(e.target.value)} />
                        <p >{errors.password?.message}</p>
                    </div>
                    {/* <Link to="/home"> */}
                    <button type="submit" className="border w-full my-5 py-2 bg-indigo-800 hover:bg-indigo-500 text-white">Sign In
                    </button>
                    {/* </Link>  */}
                    <div className="flex justify-between">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember Me</p>
                        <p>Create an account</p>
                    </div>
                    <div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3 text-sm font-normal">Set yourself free.</div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
                </form>
            </div>
        </div>
    )
};
