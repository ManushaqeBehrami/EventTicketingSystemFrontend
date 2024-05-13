import React, { useState } from "react";
import ProfilePicture from "../images/profile_pic.jpg";

const AccountPage = () => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const toggleEnlarged = () => {
        setIsEnlarged(prevState => !prevState);
    };

    return (
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mt-24">
                <h1 className="text-white text-3xl font-titles mb-10 mt-5">Account Information</h1> 
                <div className="flex flex-col items-center">
                    <img 
                        src={ProfilePicture} 
                        alt="Profile" 
                        className={`w-${isEnlarged ? '48' : '24'} h-${isEnlarged ? '48' : '24'} rounded-full mb-4 ${isEnlarged ? 'rounded-lg' : ''}`} 
                        style={{ width: isEnlarged ? '340px' : '140px', height: isEnlarged ? '251px' : '140px' }}
                        onClick={toggleEnlarged} 
                    />
                    <p className="text-white font-semibold">John Doe</p>
                    <p className="text-gray-400">johndoe@example.com</p>
                </div>
            </div>
        </main>
    );
}

export default AccountPage;
