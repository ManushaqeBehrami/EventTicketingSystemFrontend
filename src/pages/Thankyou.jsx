import { Link } from 'react-router-dom'; 

import Footer from "../components/UI/Footer";

const Thankyou = () => {
    return (
        <main>
            <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-blue-600 to-fuchsia-600">
                <div className="text-white text-center p-8">
                    <h2 className="text-3xl font-titles mb-4">Welcome to Eventopia!</h2>
                    <p className="text-2xl mb-6">Thank you for joining us!</p>
                    <p className="text-2xl mb-12">Log in for more</p>
                   
                    <div className="flex items-start justify-center mb-12">
                       
                        <Link to="/login">
                            <button type="login" className="w-full font-titles sm:w-80 bg-black text-white px-4 py-4 rounded-md mr-4 sm:mr-0 transition duration-300 hover:bg-[#e70ce3aa]">Log In</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Thankyou;
