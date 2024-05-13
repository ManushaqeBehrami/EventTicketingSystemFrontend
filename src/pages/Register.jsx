import React, { useState } from "react";
import Footer from "../components/UI/Footer";

const Register = () => {
    const [formData, setFormData] = useState({
        Username: "",
        Email: "",
        Password: "",
        FirstName: "",
        LastName: "",
        DateOfBirth: "",
        Address: "",
        PhoneNumber: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://localhost:7161/User/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                
                window.location.href = '/Thankyou';
            } else {
                
                console.error("Registration failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col items-center sm:items-start sm:ml-8 mt-8 sm:mt-24 w-full sm:w-1/2">
                    <h1 className="text-white text-3xl font-titles mb-4">Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full sm:w-80 flex flex-col sm:flex-row mb-6">
                            <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:mr-2 sm:mb-0">
                                <input type="text" name="Username" placeholder="Username" value={formData.Username} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                            </div>
                            <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:ml-2 sm:mb-0">
                                <input type="text" name="Email" placeholder="Email Address" value={formData.Email} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                            </div>
                        </div>
                        <div className="w-full sm:w-80 border-2 border-[#e70ce3aa] px-4 py-3 mb-2">
                            <input type="password" name="Password" placeholder="Password" value={formData.Password} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                        </div>
                        <div className="w-full sm:w-80 flex flex-col sm:flex-row mb-6">
                            <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:mr-2 sm:mb-0">
                                <input type="text" name="FirstName" placeholder="First Name" value={formData.FirstName} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                            </div>
                            <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:ml-2 sm:mb-0">
                                <input type="text" name="LastName" placeholder="Last Name" value={formData.LastName} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                            </div>
                        </div>
                        <div className="w-full sm:w-80 flex flex-col sm:flex-row mb-6">
                            <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:mr-2 sm:mb-0">
                                <input type="text" name="Address" placeholder="Address" value={formData.Address} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                            </div>
                            <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:ml-2 sm:mb-0">
                                <input type="text" name="PhoneNumber" placeholder="Phone Number" value={formData.PhoneNumber} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                            </div>
                        </div>
                        <div className="w-full sm:w-80 border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input type="date" name="DateOfBirth" placeholder="Date of Birth" value={formData.DateOfBirth} onChange={handleInputChange} className="w-full bg-transparent text-white placeholder-white" />
                        </div>
                        <div className="flex items-start justify-center mb-6">
                            <button type="submit" className="w-full sm:w-80 bg-[#e70ce3aa] text-white px-4 py-4 rounded-md mr-4 sm:mr-0 transition duration-300 hover:bg-gradient-to-br from-blue-600  to-fuchsia-600">Continue</button>
                        </div>
                    </form>
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

export default Register;
