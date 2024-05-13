const AboutCard = (props) => {
  return (
    <div className="p-6 max-w-full border purple-card">
      <div className="text-white">
        {props.item.titles.map((title, index) => (
          <div key={index} className="mb-4">
            <h1 className="text-2xl font-titles mb-2">{title}</h1>
            <p className="line-clamp-3">{props.item.descriptions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
