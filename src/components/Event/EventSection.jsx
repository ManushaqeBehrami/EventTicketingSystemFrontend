import Button from "../UI/Button";

const EventSection = () => {
    return (
        <div
            className="
                bg-gradient-to-br
                from-blue-600 
                to-fuchsia-600
                min-h-[650px]
                flex
                flex-col
                justify-center
                items-center
            "
        >
            <div className="text-center">
                <h1 className="text-white text-6xl font-titles my-[3rem]">
                    Check out our <br /> Events!
                </h1>
                <p className="text-white text-[1.3rem] mb-[3rem]">
                    Let's have fun together, <br /> nights to remember, and more.
                </p>
            </div>
        </div>
    );
};

export default EventSection;
