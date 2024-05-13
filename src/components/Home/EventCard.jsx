
const EventCard = (props) => {
    return (
      <div className="p-4 max-w-[350px] border rounded-2xl">
        <img src={props.item.image} alt={props.title} />
        <div className="text-white">
          <h1 className="text-3xl">{props.item.title}</h1>
          <p className="line-clamp-3">{props.item.description}</p>
        </div>
      </div>
    );
  };
  
  export default EventCard;