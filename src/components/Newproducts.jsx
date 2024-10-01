import peanut from "../assets/peanut.png";
import chinchin from "../assets/chinchin.jpeg";
import { Carousel } from "antd";

const Details = [
  {
    title: "BLISCO CHIN CHIN",
    image: chinchin,
    info: " Try out the new Blisco Chin Chin , it's a taste made in heaven,Quick fast snacks on the go for maximum satisfaction",
  },
  {
    title: "BLISCO PEANUTS",
    image: peanut,
    info: "Try out the new Blisco Peanuts, it's a taste made in heaven, Quick fast snacks on the go for maximum satisfaction",
  },
];

export const Newproduct = () => {
  const contentStyle = {
    height: "100%",
    textAlign: "start",
    background: "transparent",
  };
  return (
    <div className="w-full flex justify-center items-center newproduct-container h-fit">
      <div className="w-[90%] flex flex-col md:flex-row justify-between my-2 md:my-12">
        <div className="flex flex-col py-10 w-full md:w-[40%] gap-6">
          <div className="flex flex-col gap-3 md:items-start items-center">
            <h1 className="text-3xl font-bold">
              New <span className="text-3xl md:text-4xl">Products</span>
            </h1>
            <p className="h-[2px] w-[100px] bg-red-600"></p>
          </div>
          <p className="text-justify">
            Blisco Foods and Beverages will be introducing new bakery products
            inline with customer demands. As a Company primarily focused on
            producing healthy baked products, we ensure that all our products
            are of great standards, as we seek to keep you coming back for more.
          </p>
        </div>
        <div className="w-full md:w-[50%] newproduct-div1 h-fit md:h-fit rounded-lg overflow-hidden">
          <Carousel
            draggable={true}
            arrows={false}
            dots={false}
            autoplay
            style={contentStyle}
            fade={false}
          >
            {Details.map((item, index) => {
              return <NewproductDesign key={index} Data={item} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const NewproductDesign = (props) => {
  const { image, title, info } = props.Data;
  return (
    <div className="w-full newproduct-div rounded-lg h-full flex flex-col relative gap-6 overflow-hidden cursor-pointer justify-end bg-primary-color">
      <img src={image} alt="" className="h-[350px] object-cover md:h-[400px]" />
      <div className="absolute h-full flex flex-col items-center justify-center  text-white text-center text-lg w-full p-3 md:p-10 newproduct-overlay transition-all duration-300 gap-4">
        <h1 className=" text-2xl md:text-4xl font-Pacifico drop-shadow-lg">
          {title}
        </h1>
        <p>{info}</p>
      </div>
    </div>
  );
};
