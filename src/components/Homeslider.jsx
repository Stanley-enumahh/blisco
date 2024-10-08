import Slide1 from "../assets/mink-mingle-qZ5lPCPvdXE-unsplash.jpg";
import Slide2 from "../assets/silvana-carlos-Da9EuBu_oVA-unsplash.jpg";
import Slide3 from "../assets/pexels-marcel-fiedler-400737-1079020.jpg";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Details = [
  {
    title: " WE KEEP THE TRADITIONS OF BAKING",
    image: Slide1,
    info: " BAKED TO BE SAVOURED, MADE TO BE SHARED",
  },
  {
    title: "BAKED WITH PASSION AND CARE",
    image: Slide3,
    info: "CREATING MEMORABLE EXPERIENCE",
  },
  {
    title: "LEAVES YOU SATISFIED AND SMILING",
    image: Slide2,
    info: "A BETTER WAY TO START YOUR DAY",
  },
];

export const Homeslider = () => {
  const contentStyle = {
    height: "100%",
    textAlign: "start",
    background: "transparent",
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full h-fit">
      <Carousel
        draggable={true}
        arrows={false}
        dots={true}
        autoplay
        style={contentStyle}
        fade={true}
      >
        {Details.map((item, index) => {
          return <SliderDesign key={index} itemObj={item} />;
        })}
      </Carousel>
    </div>
  );
};

const SliderDesign = ({ itemObj }) => {
  return (
    <div className="w-full h-[600px] md:h-[500px] relative">
      <img className="w-full h-full object-cover" src={itemObj.image} alt="" />
      <div className="absolute slider-overlay w-full top-0 h-full text-white  items-center flex flex-col gap-12 justify-center text-center">
        <div className="flex flex-col gap-6 md:p-0 px-3 justify-center items-center">
          <h1
            data-aos="fade-right"
            className="font-semibold text-3xl md:text-6xl"
          >
            {itemObj.title}
          </h1>
          <p data-aos="fade-up" className="h-[2px] w-[200px] bg-red-600"></p>
          <h2 data-aos="fade-left" className="text-lg md:text-3xl">
            {itemObj.info}
          </h2>
        </div>
        <button
          data-aos="fade-up"
          className="bg-primary-color hover:scale-105 transition-all duration-200 px-4 py-2 text-lg rounded"
        >
          <Link className="hover:text-white" to="/contactUs">
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};
