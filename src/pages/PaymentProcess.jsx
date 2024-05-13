import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/UI/Footer";
import OrderCard from "../components/Payment/OrderCard";

const PaymentProcess = () => {
    const initialPaymentData = {
        paymentID: 0,
        orderID: '',
        amount: '',
        paymentDate: new Date().toISOString(),
        email: '',
        cardnumber: '' // Added card number field
    };

    const [paymentData, setPaymentData] = useState(initialPaymentData);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const { email, cardnumber, ...postData } = paymentData;
            const response = await axios.post('https://localhost:7161/api/Payment/process', postData);
            console.log('Payment created successfully:', response.data);
            
        } catch (error) {
            console.error('Error creating payment:', error);
            setErrorMessage("Could not process your payment!");
        }
    };

    return (
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col items-center sm:items-start sm:ml-8 mt-8 sm:mt-24 w-full sm:w-1/2">
                    <h1 className="text-white text-3xl font-titles mb-4">Payment Process</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="number"
                                name="cardnumber"
                                placeholder="Card Number"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={paymentData.cardnumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="number"
                                name="orderID"
                                placeholder="Order ID"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={paymentData.orderID}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="number"
                                name="amount"
                                placeholder="Amount"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={paymentData.amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email (Optional)"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={paymentData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#e70ce3aa] text-white px-4 py-4 rounded-md transition duration-300 hover:bg-gradient-to-br from-blue-600  to-fuchsia-600">Proceed to Payment</button>
                    </form>
                </div>
                <div className="hidden sm:flex items-center justify-center w-full sm:w-1/2 relative mt-8">
                    <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-br from-blue-600 to-fuchsia-600 w-full flex items-center justify-center">
                        <div className="z-10 text-white text-center p-8">
                            <h2 className="text-3xl font-titles mb-4">Secure Payment Process</h2>
                            <p className="text-lg">Enter your payment details securely.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default PaymentProcess;
