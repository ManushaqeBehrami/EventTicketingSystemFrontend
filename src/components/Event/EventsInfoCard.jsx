import React from 'react';

const EventInfosCard = ({ item }) => {
  return (
    <div className="p-4 max-w-[350px] border rounded-2xl">
      <img src={item.image} alt={item.title} />
      <div className="text-white">
        <h1 className="text-3xl">{item.title}</h1>
        <p className="line-clamp-3">{item.description}</p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md mt-2">Buy Ticket</button>
      </div>
    </div>
  );
};

export default EventInfosCard;
