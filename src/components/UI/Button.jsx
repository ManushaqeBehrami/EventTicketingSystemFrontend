const Button = (props) => {
    return (
      <button
        className={
          props.variant === "oval"
            ? "bg-white text-primary rounded-3xl px-12 py-2 text-xl"
            : "bg-secondary text-white px-8 py-2"
        }
      >
        {props.text}
      </button>
    );
  };
  
  export default Button;
  