import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const BuyTicket = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null); 
    const [ticketQuantity, setTicketQuantity] = useState(1); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:7161/api/Event/${eventId}`);
            setEvent(response.data);
        } catch (error) {
            console.error('Error fetching event:', error);
        }
    };

    const handleQuantityChange = (e) => {
        setTicketQuantity(parseInt(e.target.value));
    };

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-white font-titles text-2xl mb-4">Your Ticket</h2>
            <div className="bg-gray-800 rounded-lg p-6">
                <h1 className="text-white font-titles text-3xl font-bold mb-4">{event.name}</h1>
                <p className="text-white mb-4">{event.description}</p>
                <p className="text-white mb-4">Organizer: {event.organizer}</p>
                <p className="text-white mb-4">Location: {event.location}</p>
                <label className="text-[#e70ce3aa]">
                    Select Number of Tickets:
                    <input
                        type="number"
                        value={ticketQuantity}
                        onChange={handleQuantityChange}
                        min={1}
                        className="ml-2 p-2 border rounded-md focus:outline-none focus:border-purple-400"
                    />
                </label>
                <div className="mt-4">
                    <Link to="/PaymentProcess">
                        <button className="bg-[#e70ce3aa] hover:bg-[#e70ce3aa] text-white px-4 py-2 rounded-md">
                            Proceed
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BuyTicket;
