import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventCard from '../components/Home/EventCard';
import EventSection from '../components/Event/EventSection';
import Footer from '../components/UI/Footer';

const Yourevent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://localhost:7161/api/Event');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    return (
        <main>
            <EventSection />
            <div className="w-full bg-primary">
                <div className="border-b-white border-b-2 max-w-full mt-12 mx-6 py-2">
                    <h1 className="text-white text-3xl">Events</h1>
                </div>
                <div className="flex md:px-[150px] xl:px-[200px] flex-wrap w-full bg-primary justify-center gap-6 py-6">
                    {events.map((event) => (
                        <div key={event.eventID} className="border-purple border-2 rounded-lg w-[250px] h-[300px] p-4">
                            <h2 className="text-white text-lg font-titles mb-2">Event ID: {event.eventID}</h2>
                            <h2 className="text-white text-lg font-titles mb-2">{event.name}</h2>
                            <p className="text-white mb-2">{event.description}</p>
                            <p className="text-white mb-2">Organizer: {event.organizer}</p>
                            <p className="text-white">Location: {event.location}</p>
                            <Link to={`/BuyTicket/${event.eventID}`}>
                                <button className="text-white bg-purple hover:bg-opacity-80 px-4 py-2 mt-4 block rounded-md">
                                    Buy Ticket
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Yourevent;
