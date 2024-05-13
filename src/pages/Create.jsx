import Header from "../components/UI/Header";
import HeroSection from "../components/Create/HeroSection";
import InfoCard from "../components/Create/InfoCard";
import Footer from "../components/UI/Footer";
import AboutCard from "../components/Create/AboutCard";
import Mockupevent from "../images/Mockupevent.png";
//import axios from "axios";

const Create = () => {
  const EV_CARDS = [
    {
      title: "Event Ticketing",
      description: `Sell more tickets with customizable event pages and a seamless checkout experience for attendees on a trusted platform`,
    },
    {
      title: "Reporting & Analytics",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    },
    {
      title: "Organizer App",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    },
  ];
  const PURPLE_CARDS = [
    {
      titles: [
        "Event Ticketing",
        "Eventbrite Ads",
        "Marketing Tools",
        "Payments",
      ],
      descriptions: [
        "Everything you need to sell tickets for in-person or online events",
        "Create no-hassle ads that promote your event on Eventbrite",
        "All the event marketing tools you need in one place",
        "Easily collect and simplify event payments",
      ],
    },
  ];

  return (
    <main>
  <HeroSection />
  <div className="w-full bg-primary">
    <div className="max-w-full mt-12 mx-6 py-2">
      <h1 className="text-white text-3xl font-titles my-[3rem]">
        Event hosting made easy
      </h1>
      <p className="text-white text-xl">
        Easily create and manage events on a platform that attendees
        <br /> love and trust
      </p>
    </div>
    <div className="flex flex-col md:flex-row md:px-[150px] xl:px-[300px] w-full bg-primary gap-8 py-10">
      <div className="flex flex-col gap-8 w-full md:w-1/2">
        {EV_CARDS.map((item, index) => (
          <InfoCard key={index} item={item} />
        ))}
      </div>
      <div className="flex-shrink-0">
      <img
        src={Mockupevent}
        alt="Mockup Event"
        className="ms-auto max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
        style={{ alignSelf: 'center', marginTop: '3rem' }}
/>

      </div>
    </div>
    <div className="max-w-full mt-12 mx-6 py-2">
      <h1 className="text-white text-2xl font-titles my-[3rem]">
        All the tools you need to host an event & grow your community
      </h1>
    </div>
    <div className="w-full">
      {PURPLE_CARDS.map((item, index) => (
        <AboutCard key={index} item={item} />
      ))}
    </div>
  </div>
  <Footer />
</main>

  );
};

export default Create;
