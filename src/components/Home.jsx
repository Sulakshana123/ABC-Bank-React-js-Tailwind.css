import React from "react";
import HomeImg from "../assets/bank1.webp"
import bankImg from "../assets/bank.webp"
import bankImg1 from "../assets/bank2.webp"
// import signout from "../SignOut"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();
  var user = localStorage.getItem("user")
  var userid = localStorage.getItem("userid")
  var jwt = localStorage.getItem("jwt")
  const url = 'http://localhost:8080/usebyid/'
  const signout = (e) => {

    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    localStorage.removeItem('userid')
    navigate("/")
  }
  const getuser = (e) => {
    // console.log(jwt);

    axios.post(
      url + userid,
      null,
      {
        headers: {
          'Authorization': `Bearer ` + jwt,
          'Access-Control-Allow-Origin': '*'
        }
      }
    ).then(function (response) {
      var user = response.data;
      // console.log(user.accounts[0].transactins.length);
      localStorage.setItem('auth', response.data)
      const users = JSON.parse(localStorage.getItem('auth'))
      console.log(users)
      // navigator("/home");
      // user.userEmail

    })
  }
  return (
    <div className='grid grid-cols-1  h-screen w-full'>
      <nav class="flex items-center justify-between flex-wrap bg-indigo-800 p-6 h-20">
        <div class="flex items-center flex-shrink-0 text-white mr-6">

          <span class="font-semibold text-xl tracking-tight">Admin</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
              Home
            </a>
            <a href="/adminprofile" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
              Profile
            </a>
            <a href="/viewtransaction" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
              Transaction
            </a>
            <a href="/createuser" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
              User
            </a>
            <a href="/createaccount" class="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-5">
              Account
            </a>
          </div>
          <div>
            <a href="/" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-200 hover:bg-blue-900 mt-4 lg:mt-0" onClick={signout}>Log Out</a>
          </div>
        </div>
      </nav>
      <div className='justify-center'>
        {/* <img className='max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl'src={LoginImg} alt=""/> */}
        <div class="grid grid-cols-3 gap-4 flex items-center">
          <div class="mb-4">
            <img src={HomeImg} class="max-w-full h-auto rounded-lg" alt="" />
          </div>

          <div class="mb-4">
            <img src={bankImg} class="max-w-full h-auto rounded-lg" alt="" />
          </div>
          <div class="mb-4">
            <img src={bankImg1} class="max-w-full h-auto rounded-lg" alt="" />
          </div>
        </div>
      </div>

    </div>


  )
};

