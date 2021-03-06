import axios from "axios";
import { Link } from "react-router-dom";
import Userview from "./Userview";

const UserList = () => {
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
    //         url: "http://localhost:8090/deletebyid/" + userID,
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
    axios({
        method: "get",
        url: "http://localhost:8090/allusers",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
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
        var users = res.data;
        localStorage.setItem("UserList", JSON.stringify(users))
    })
    // }
    const usersObj = localStorage.getItem('UserList')
    const usersList = JSON.parse(usersObj);
    // console.log(usersList)

    return (
        <tbody maxWidth="150px">
            {usersList.map((blog) => (
                <tr class="bg-white border-b transition duration-300 ease-in-out ">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.uID}</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.uFName}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.uLName}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.address}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.userEmail}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.password}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.userType}
                    </td>

                    {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button to={() => Userview()} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>

                    </td > */}
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

export default UserList;