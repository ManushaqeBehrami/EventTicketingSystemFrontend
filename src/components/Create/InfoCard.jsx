const InfoCard = (props) => {
    return (
      <div className="p-4 max-w-[450px] border">
        <img src={props.item.image} alt={props.title} />
        <div className="text-white">
          <h1 className="text-2xl font-titles my-[1.5rem]">{props.item.title}</h1>
          <p className="line-clamp-3">{props.item.description}</p>
        </div>
      </div>
    );
  };
  
  export default InfoCard;