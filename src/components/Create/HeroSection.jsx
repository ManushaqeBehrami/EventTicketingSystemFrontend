import Button from "../UI/Button";
import { Link } from 'react-router-dom'; 

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
                    Where Event Organizers <br /> Grow!
                </h1>
                <p className="text-white text-[1.3rem] mb-[3rem]">
                    Sell tickets, promote events, <br /> engage sponsors, and discover
                    events.
                </p>
                <Link to="/event">
                <Button variant="oval" text="Create Your Event!" />
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;