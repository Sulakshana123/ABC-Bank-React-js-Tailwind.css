import React from "react";
import accountlist from "../assets/accountlist.jpg"
import TransactionList from "./TransactionList";
// import signout from "../SignOut"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AccountList from "./AccuntList";

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
      <br/><br/><br/><br/>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className="bg-gray-100 flex flex-col ">
            <section className="relative py-16 bg-slate-100 top-48">
            <div className="container mx-auto px-4 w-5/6">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={accountlist}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}
                        />
                        <br /><br />
                      </div>
                    </div>

                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                      Account List
                    </h3>

                  </div>
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                            </thead>
                            <tbody maxWidth="150px">
                            <AccountList />
                              {/* <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">User ID</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 #
                                </td>

                              </tr>
                              
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 # 
                                </td>

                              </tr>
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Address</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                # 
                                </td>

                              </tr>
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">User Type</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 #
                                </td>

                              </tr>
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Password</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                #
                                </td>

                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
       
    
            
            

            <div className="bg-gray-100 flex flex-col justify-center">
            <section className="relative py-16 bg-slate-100 top-48">
            <div className="container mx-auto px-4 w-5/6">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={accountlist}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}
                        />
                        <br /><br />
                      </div>
                    </div>

                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                      Transaction List
                    </h3>

                  </div>
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full">
                            <thead class="bg-white border-b">
                            </thead>
                            <tbody maxWidth="150px">
                            <TransactionList />
                              {/* <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">User ID</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 #
                                </td>

                              </tr>
                              
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 # 
                                </td>

                              </tr>
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Address</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                # 
                                </td>

                              </tr>
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">User Type</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                 #
                                </td>

                              </tr>
                              <tr class="bg-white border-b transition duration-300 ease-in-out ">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Password</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                #
                                </td>

                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
       
      </div>
     

    </div>


  )
};

