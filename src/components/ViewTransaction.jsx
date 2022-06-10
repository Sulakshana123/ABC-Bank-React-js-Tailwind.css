import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TransactionList from "./TransactionList";



export default function ViewTransaction() {
    // const ExportPDF = (e) => {
    // console.log("user1", uFName)
    // console.log("uLName", uLName)
    // console.log("address", address)
    // console.log("userEmail", userEmail)
    // console.log("password", password)
    // console.log("userType", userType)
    // console.log("jwt", jwt)
    // const url = 'http://localhost:8080/createuser'
    const userObj1 = localStorage.getItem('user1')
    // const user1 = JSON.parse(userObj1);
    // const url ="http://localhost:8080/alltransactions";
    
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
                <main className="profile-page">

                    <section className="relative py-16 bg-slate-100 top-48">
                        <div className="container mx-auto px-4 w-2/3">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div className="relative">
                                                <img
                                                    alt="..."
                                                    src={profile}
                                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                                    style={{ maxWidth: "150px" }}
                                                />
                                                <br /><br />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="text-center mt-12">
                                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                            Transaction List
                                        </h3>

                                    </div>
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full">
                                                    <thead class="bg-white border-b">
                                                    </thead>
                                                    <TransactionList />
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </div>



    )
};

