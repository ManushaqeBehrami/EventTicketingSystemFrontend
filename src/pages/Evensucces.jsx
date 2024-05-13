import { Link } from 'react-router-dom'; 

import Footer from "../components/UI/Footer";

const Eventsuccess = () => {
    return (
        <main>
            <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-blue-600 to-fuchsia-600">
                <div className="text-white text-center p-8">
                    <h2 className="text-3xl font-titles mb-4">You created your event!</h2>
                    <p className="text-2xl mb-6">Thank you for joining us!</p>
                    <p className="text-2xl mb-12">Let's have fun together.</p>
                   
                    <div className="flex items-start justify-center mb-12">
                       
                        <Link to="/">
                            <button type="home" className="w-full font-titles sm:w-80 bg-black text-white px-4 py-4 rounded-md mr-4 sm:mr-0 transition duration-300 hover:bg-[#e70ce3aa]">Return home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Eventsuccess;
