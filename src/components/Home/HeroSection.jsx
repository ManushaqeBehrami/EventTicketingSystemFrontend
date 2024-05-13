import Button from "../UI/Button";

const HeroSection = () => {
    return (
        <div
            className="
      bg-gradient-to-br
     from-blue-600 
     to-fuchsia-600
      min-h-[650px]
      flex
      flex-1
      justify-center
      align-middle
      "
        >
            <div>
                <h1 className="text-white text-6xl font-titles my-[3rem]">
                    Where Events <br /> Begin!
                </h1>
                <p className="text-white text-[1.3rem] mb-[3rem]">
                    Sell tickets, promote events, <br /> engage sponsors, and discover
                    events.
                </p>
                <Button variant="oval" text="Let’s go!" />
            </div>
        </div>
    );
};

export default HeroSection;