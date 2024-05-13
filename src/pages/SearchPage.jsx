import React, { useState } from 'react';
import axios from 'axios';


const EventSearchPage = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://localhost:7161/api/Event/search?query=${query}`);
            if (!response.data || !Array.isArray(response.data)) {
                throw new Error('Invalid response format');
            }
            setSearchResults(response.data.map(event => ({
                id: event.eventID,
                name: event.name,
                description: event.description,
                location: event.location,
                organizer: event.organizer
            })));
            setError('');
        } catch (err) {
            setSearchResults([]);
            setError('Error fetching search results');
        } finally {
            setLoading(false);
            setQuery('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <main className="text-white min-h-screen">
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Event Search</h1>
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter search query"   //ngjyra [#e70ce3aa]
                        className="border border-gray-300 rounded py-2 px-4 mr-2 focus:outline-none focus:border-purple-500 flex-grow bg-black text-white"
                    />
                    <button
                        onClick={handleSearch}
                        disabled={!query || loading}
                        className="bg-[#e70ce3aa] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div>
                    {Array.isArray(searchResults) && searchResults.length > 0 ? (
                        searchResults.map((event) => (
                            <div key={event.id} className="mb-4 border border-gray-300 p-4 rounded">
                                <h2 className="text-xl font-semibold">Emri:{event.name}</h2>
                                <p className="text-gray-400">Description:{event.description}</p>
                                <p className="text-gray-400">Organizer: {event.organizer}</p>
                                <p className="text-gray-400">📍 {event.location}</p>
                            </div>
                        ))
                    ) : (
                        <p>No search results found</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default EventSearchPage;