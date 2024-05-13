import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/UI/Footer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLoginSuccess = (token) => {
        
        localStorage.setItem('token', token);
        window.location.href = '/';
    };

    const handleLogin = () => {
        const requestData = {
            email: email,
            password: password
        };

        axios.post('https://localhost:7161/User/authenticate', requestData)
            .then(response => {
                const { token } = response.data;
                handleLoginSuccess(token);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setErrorMessage("Your email or password is wrong");
            });
    };

    return (
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row">
                
                <div className="flex flex-col items-center sm:items-start sm:ml-8 mt-8 sm:mt-24 w-full sm:w-1/2">
                    <h1 className="text-white text-3xl font-titles mb-4">Log In</h1>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <div className="w-full sm:w-80 border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                        <input type="text" placeholder="Email Address" className="w-full bg-transparent text-white placeholder-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="w-full sm:w-80 border-2 border-[#e70ce3aa] rounded-md px-4 py-3 mb-6">
                        <input type="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-start justify-center mb-6">
                        <button onClick={handleLogin} className="w-full sm:w-80 bg-[#e70ce3aa] text-white px-4 py-4 rounded-md mr-4 sm:mr-0 transition duration-300 hover:bg-gradient-to-br from-blue-600  to-fuchsia-600">Continue</button>
                    </div>
                    <div className="flex items-start justify-end mb-2 ml-36">
                        <p className="text-white font-titles mb-2 mr-2">or</p>
                    </div>
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-80 border-2 border-[#e70ce3aa] px-4 py-3">
                            <a href="/register" className="text-white font-titles cursor-pointer hover:underline hover:text-secondary">Register</a>
                        </div>
                    </div>
                </div>
               
                <div className="hidden sm:flex items-center justify-center w-full sm:w-1/2 relative mt-8">
                    <div className="absolute right-0 top-0 bottom-0  bg-gradient-to-br from-blue-600  to-fuchsia-600 w-full flex items-center justify-center">
                        <div className="z-10 text-white text-center p-8">
                            <h2 className="text-3xl font-titles mb-4">Welcome back to Eventopia</h2>
                            <p className="text-lg">Let's have fun together!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Login;
