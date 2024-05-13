import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/UI/Footer";

const Event = () => {
    const initialEventData = {
        Name: '',
        Description: '',
        Location: '',
        Organizer: '',
        TicketQuantity: '',
        Price: '',
        DateTime: '',
    };

    const [eventData, setEventData] = useState(initialEventData);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://localhost:7161/api/Event'); 
            setEventData(response.data || initialEventData);
        } catch (error) {
            console.error('Error fetching event data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7161/api/Event', eventData);
            console.log('Event created successfully:', response.data);
            window.location.href = '/Eventsuccess';
        } catch (error) {
            console.error('Error creating event:', error);
            setErrorMessage("Could not create your event!");
        }
    };
    return (
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col items-center sm:items-start sm:ml-8 mt-8 sm:mt-24 w-full sm:w-1/2">
                    <h1 className="text-white text-3xl font-titles mb-4">Create New Event</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="text"
                                name="Name"
                                placeholder="Event Name"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={eventData.Name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <textarea
                                name="Description"
                                placeholder="Description"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={eventData.Description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="text"
                                name="Location"
                                placeholder="Location"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={eventData.Location}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="text"
                                name="Organizer"
                                placeholder="Organizer"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={eventData.Organizer}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="number"
                                name="TicketQuantity"
                                placeholder="Ticket Quantity"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={eventData.TicketQuantity}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                           <input
                                type="number"
                                name="Price"
                                placeholder="Price (e.g., $10.00)"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={eventData.Price}
                                onChange={handleInputChange}
                                required
                          />
                        </div>
                        <div className="w-full border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                            <input
                                type="datetime-local"
                                name="DateTime"
                                className="w-full bg-transparent text-white placeholder-white"
                                value={eventData.DateTime}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#e70ce3aa] text-white px-4 py-4 rounded-md transition duration-300 hover:bg-gradient-to-br from-blue-600  to-fuchsia-600">Create Event</button>
                    </form>
                </div>
                <div className="hidden sm:flex items-center justify-center w-full sm:w-1/2 relative mt-8">
                    <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-br from-blue-600 to-fuchsia-600 w-full flex items-center justify-center">
                        <div className="z-10 text-white text-center p-8">
                            <h2 className="text-3xl font-titles mb-4">Create an Amazing Event </h2>
                            <p className="text-lg">Create and manage your events!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Event;
