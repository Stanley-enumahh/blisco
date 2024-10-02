import { Navbar } from "../components/Navbar";
import BliscoBreadCake from "../assets/blisco3.png";
import products from "../assets/IMG_20231106_171541_880@-1909798223.jpg";
import BliscoClissicgold from "../assets/blisco8.png";
import Bliscoroundbread from "../assets/blisco4.png";
import BliscoCoconutBread from "../assets/blisco7.png";
import BliscoJumbBread from "../assets/blisco6.png";
import BliscoPeanut from "../assets/blisco10.png";
import BliscoChinChin from "../assets/blisco9.png";
import BliscoMultiGrain from "../assets/blisco5.png";
import BliscoCakeBread from "../assets/blisco3.png";
import { Footer } from "../components/footer";
import ScrollToTop from "../components/Navbar";
import blisco1 from "../assets/blisco1.png";
import { Carousel } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Details = [
  {
    image: BliscoBreadCake,
    title: "BLISCO ECONOMY BREAD",
    info: "This is our Pocket Friendly Bread. It is rich in taste and Quality very soft and tasty",
    weight: "Net Weight: 1.2kg",
  },
  {
    image: blisco1,
    title: "TEA-CHOCO-MILK",
    info: "If you have unique taste for chocolate this product is for you.Blisco Tea-Choco-Milk Bread is a unique recipe for Lovers of Chocolate . It is made with 100% Chocolate, Cocoa Powder and Tea, and Milk. Every bite gives you that Chocolate experience. It is Soft, Fresh and Tasty. ",
    weight: "Net Weight: 600g",
  },
  {
    image: BliscoClissicgold,
    title: "BLISCO CLASSIC GOLD",
    info: "This is our Flagship Toast Bread, it is produced with the best quality ingredients that are good for your body. it is very soft, always fresh and tasty. it contains mixed fruits and spices ",
    weight: "Net Weight: 1kg",
  },
  {
    image: BliscoCakeBread,
    title: "BLISCO CAKE BREAD",
    info: "Blisco Cake Bread is our Premium Sliced Bread, it is delicious and tastes like Cake, very fluffy and Unique taste.it is moderate in Size and can serve as both breakfast and used for toast.",
    weight: "Net Weight: 850g",
  },
  {
    image: Bliscoroundbread,
    title: " BLISCO ROUND BREAD",
    info: "This the Smallest bread in our Product Line. it is soft, fluffy and contains fruit inside. it is consumed by both young and Adult",
    weight: " Net Weight: 200g",
  },
  {
    image: BliscoChinChin,
    title: "BLISCO CHIN CHIN",
    info: "Blisco Chin Chin is made with high quality ingredients and it has a unique and superior taste. The chin chin is crispy and delicious and contains less fat. it is enriched with nutrients that help to promote good healthy living",
    weight: "Net Weight: 50g",
  },
  {
    image: BliscoCoconutBread,
    title: " BLISCO COCONUT BREAD",
    info: "Baked with Raw Desiccated Coconut, made from freshly processed natural coconut seeds. Blisco coconut Bread is an artisan Bread, carefully crafted and baked with unique recipe to give you the natural feel of coconut mixed with bread. This is a complete delicacy. Every bite will make you feel nature's true essence of enjoyment.",
    weight: "Net Weight: 1.3kg",
  },
  {
    image: BliscoJumbBread,
    title: "BLISCO JUMBO BREAD",
    info: "Blisco Jumbo Bread is one of our Star Flagship Brand in the Market . The Net Weight is 1.5kg, it is produced to serve Large Family. The Product is Sweet, Soft, Fresh and Tasty. This Jumbo Bread can Feed up to 10 Family members to Satisfaction.",
    weight: "Net Weight is 1.5kg",
  },
  {
    image: BliscoPeanut,
    title: "BLISCO PEANUT SNACK",
    info: "Blisco Peanut is rich in taste and very crispy it contains milk and spices, it is good for everybody. Super delicious peanut",
    weight: "Net Weight: 50g",
  },
  {
    image: BliscoMultiGrain,
    title: "BLISCO MULTIGRAIN BREAD ",
    info: "Blisco Multigrain Bread is produced with Whole Wheat Flour, Plantain Flour, Sorghum Oat and spices that help to promote health. It has no added sugar. It is produced for Health Conscious individual who wants less Sugar and more Fibre in their Diet",
    weight: "Net Weight: 850g",
  },
];

export default function ProductsDisplay() {
  useEffect(() => {
    AOS.init({ duration: 2000 }), [];
  });
  const contentStyle = {
    height: "100%",
    textAlign: "start",
    background: "transparent",
  };
  return (
    <div className="w-full overflow-hidden h-fit items-center flex flex-col font-ralewaay product-main">
      <Navbar />
      <ScrollToTop />
      <div className="w-full flex flex-col mt-[80px] justify-center items-center">
        <Intro />
        <div className="w-full relative md:w-[90%] flex flex-row">
          <p className="w-[200px] md:flex hidden top-[270px] h-[200px] bg-primary-color rounded-full absolute shadow-xl"></p>
          <p className="w-[100px] top-[400px] md:flex hidden  left-[240px] h-[100px] bg-[#f2c14e] rounded-full absolute shadow-xl"></p>
          <div className="h-full w-full my-10">
            <Carousel
              draggable={true}
              arrows={false}
              dots={true}
              autoplay
              style={contentStyle}
            >
              {Details.map((item, index) => {
                return <ProductDesign key={index} Data={item} />;
              })}
            </Carousel>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export function ProductDesign(props) {
  const { image, title, info, weight } = props.Data;
  return (
    <div className="flex flex-col md:gap-0 gap-10 cursor-pointer md:flex-row justify-between w-full items-center h-fit md:h-full rounded-lg px-4 md:px-12 md:mb-6">
      <div className="w-full md:w-[45%] h-fit flex flex-col justify-center gap-3 ">
        <h1 className="font-bold text-xl md:text-3xl drop-shadow-lg">
          {title}
        </h1>
        <p className=" text-justify text-lg">{info}</p>
        <p className="text-xs">{weight}</p>
      </div>
      <div className="w-full shadow-2xl md:w-[45%] h-fit md:h-[450px] border-4 flex justify-center items-center bg-[#f2c14e] rounded-2xl border-neutral-400 md:mb-0 ">
        <img
          src={image}
          className="h-[60%] w-[60%] md:w-[60%] md:h-full drop-shadow-lg object-fill"
        />
      </div>

      <ScrollToTop />
    </div>
  );
}

const Intro = () => {
  return (
    <div className=" relative h-[450px] md:h-[400px] w-full font-ralewaay">
      <img src={products} className="h-full w-full object-cover" alt="" />
      <div className="absolute Bakery-overlay top-0 w-full h-full left-0 p-5 md:pl-[100px] flex justify-center flex-col text-white">
        <div className="md:w-[70%] flex gap-3 flex-col">
          <h1 data-aos="fade-in" className="text-lg">
            <span className="text-primary-color font-bold">Welcome to </span>
            <br />
            <span className="text-3xl font-bold text-primary-color">
              Blisco foods
            </span>{" "}
            Where Every Bite Feels Like Home!
          </h1>
          <p className="text-justify">
            At Blisco Foods, we believe that the best moments in life are
            savored with a delicious treat in hand. Blisco Foods and Beverages
            Products are produced with Selection of Best Quality Food Grade
            Ingredients and Raw materials approved by NAFDAC to give you soft,
            fresh and Delicious quality Products that are health and good for
            your family Enjoyment
          </p>
        </div>
      </div>
    </div>
  );
};
