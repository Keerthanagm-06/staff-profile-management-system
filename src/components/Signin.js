import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { app, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Signin = () => {
    const history = useHistory();
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('admin123');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPasswordText, canShowPasswordText] = useState(false);
    const databaseRef = collection(database, 'admin_data');

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        setError(null);
        const error = validateFields();
        if (Object.keys(error).length === 0) {
            await getDocs(databaseRef).then((res) => {
                const adminData = res.docs.map((data) => {
                    return { ...data.data(), id: data.id };
                });
                if (adminData[0].username === username && adminData[0].password === password) {
                    history.push('/staffs');
                    toast.success("success");
                } else {
                    toast.error("failure");
                }
            }).catch((err) => {
                console.error(err)
            })
        }
        setError(error);
        setLoading(false);
    }

    const validateFields = () => {
        const validationError = {};
        if (!username) {
            validationError.username = 'Username field is required';
        }
        if (!password) {
            validationError.password = 'Password is required';
        }
        return validationError;
    }


    return (
        <section class="h-full gradient-form bg-gray-200 md:h-screen">
            <div class=" py-12 px-6 h-full">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="sm:w-7/12">
                        <div class="block bg-white shadow-lg rounded-lg">
                            <div class="lg:flex lg:flex-wrap g-0">
                                <div class="lg:w-6/12 px-4 md:px-0">
                                    <div class="md:p-12 md:mx-6">
                                        <div class="text-center">
                                            <img
                                                class="mx-auto w-48"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo"
                                            />
                                            <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">We are The Rugged Boys</h4>
                                        </div>
                                        <form class="">
                                            <p class="mb-4">Please login to your account</p>
                                            <div class="mb-4">
                                                <input
                                                    type="text"
                                                    class="mx-auto mt-6 rounded-xl form-control block w-10/12 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Username"
                                                    onChange={handleUsername}
                                                    value={username}
                                                />
                                                {error?.username ?
                                                    <p className=' text-red-500 text-sm'>*{error.username}</p>
                                                    : <></>}
                                            </div>
                                            <div class="mb-4">
                                                <input
                                                    type={showPasswordText ? "text" : "password"}
                                                    class="mx-auto mt-6 rounded-xl form-control block w-10/12 px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Password"
                                                    onChange={handlePassword}
                                                    value={password}
                                                />
                                                <span className="flex" style={{ height: "0.75rem" }} onClick={() => canShowPasswordText(!showPasswordText)}>
                                                    {showPasswordText ?

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye   -translate-y-6 float-end mr-10 mx-auto" viewBox="0 0 16 16">
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                        </svg> :
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye-fill  -translate-y-6 float-end mr-10 mx-auto" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                        </svg>}
                                                </span>
                                                {error?.password ?
                                                    <p className=' text-red-500 text-sm'>*{error.password}</p>
                                                    : <></>}
                                            </div>
                                            <div class="text-center pt-1 mb-12 pb-1">
                                                <button
                                                    class="mt-6 rounded-xl inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-10/12 mb-3"
                                                    type="button"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    style={loading ? { background: "#15EDE6" } : { background: "linear-gradient(to right,#1522ED, #157AED, #15D0ED, #15EDE6)" }}
                                                    onClick={handleSubmit}
                                                    disabled={loading}
                                                >
                                                    {loading ? "Logging..." : "Log in"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                    style={{ background: "linear-gradient(to right, #1522ED, #157AED, #15D0ED, #15EDE6)" }}
                                >
                                    <div class="mx-auto text-white px-4 py-6 md:p-12 ">
                                        <h4 class=" text-xl font-semibold mb-6">Staffs Profile Management</h4>
                                        <p class="text-sm w-11/12 pl-8">
                                            The main objective of this project is to store and manage all staffs details. This application mainly allows the admin to enter their personal information (viz., contact
                                            information, previous education, previous work experience)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Toaster />
        </section >
    );

}

export default Signin;