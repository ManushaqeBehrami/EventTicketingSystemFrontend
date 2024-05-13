import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="p-6 flex flex-1 flex-col align-middle justify-center text-white">
      <div className="flex flex-1 justify-center xl:justify-end m-6">
        <div className="flex max-w-[300px] gap-4">
          <Facebook
            className="bg-[#6f6f6f] p-2 rounded-lg"
            size="2.2rem"
            color="white"
          />
          <Instagram
            className="bg-[#6f6f6f] p-2 rounded-lg"
            size="2.2rem"
            color="white"
          />
          <Linkedin
            className="bg-[#6f6f6f] p-2 rounded-lg"
            size="2.2rem"
            color="white"
          />
          <p className="text-2xl text-white font-serif _max-md:hidden">
            Eventop<span className="text-secondary">i</span>a
          </p>
        </div>
      </div>

      <div className="w-full border-t-white border-t-2 ">
        <p className="xl:text-right">Copyright ©2024 Eventopia.</p>
      </div>
    </div>
  );
};

export default Footer;