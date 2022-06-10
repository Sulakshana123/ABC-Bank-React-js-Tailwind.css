import axios from "axios";
import { Link } from "react-router-dom";
import Userview from "./Userview";

const AccountList = () => {
    var jwt = localStorage.getItem("jwt")
    // console.log(jwt)
    // var tansactions = '';

    // fetch(url, {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //             "Authorization": `Bearer ` +user1.jwt
    //         })
    //         .then(res => {
    //             console.log(res)

    //         });
    // const DeleteUser = (userID) => {
    //     // const UserID = props.userID
    //     console.log(userID)
    //     axios({
    //         method: "delete",
    //         url: "http://localhost:8080/deletebyid/" + userID,
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //             "Authorization": `Bearer ` + jwt
    //         }, data: null,
    //         // data: {
    //         //     uFName: uFName,
    //         //     uLName: uLName,
    //         //     address: address,
    //         //     userEmail: userEmail,
    //         //     password: password,
    //         //     userType: userType
    //         // },
    //         // withCredentials: true,
    //         mode: "cors",
    //     }).then((res) => {
    //         console.log("response", res)
    //         // var users = res.data;
    //         // localStorage.setItem("UserList", JSON.stringify(users))
    //     })
    // }
    // console.log(jwt)
    axios({
        method: "post",
        url: "http://localhost:8080/getallaccounts",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": `Bearer ` + jwt
        }, data: null,
        // data: {
        //     uFName: uFName,
        //     uLName: uLName,
        //     address: address,
        //     userEmail: userEmail,
        //     password: password,
        //     userType: userType
        // },
        // withCredentials: true,
        mode: "cors",
    }).then((res) => {
        // console.log("response", res.data)

        var accounts = res.data;
        localStorage.setItem("AccountList", JSON.stringify(accounts))
    })
    // }
    const accountsObj = localStorage.getItem('AccountList')
    const accountsList = JSON.parse(accountsObj);
    // console.log(accountsList)

    return (
        <tbody maxWidth="150px">
            {accountsList.map((blog) => (
                <tr class="bg-white border-b transition duration-300 ease-in-out ">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.accNumber}</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.uID}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.balance}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.cOD}
                    </td>
                    
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <button type="button" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </td>
                </tr>
            ))}

        </tbody>
    );
}

export default AccountList;