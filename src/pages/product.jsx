import { Navbar } from "../components/Navbar";
import BliscoBreadCake from "../assets/p1.png";
import products from "../assets/fresh bread.jpg";
import BliscoTeachoco from "../assets/p2.png";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WhatsApp } from "./Homepage";

const Details = [
  {
    image: BliscoBreadCake,
    title: "BLISCO ECONOMY BREAD",
    info: "This is our Pocket Friendly Bread. It is rich in taste and Quality very soft and tasty",
    weight: "Net Weight: 1.2kg",
  },
  {
    image: BliscoTeachoco,
    title: "TEA-CHOCO-MILK",
    info: "If you have unique taste for chocolate this product is for you.Blisco Tea-Choco-Milk Bread is a unique recipe for Lovers of Chocolate . It is made with 100% Chocolate, Cocoa Powder and Tea, and Milk. Every bite gives you that Chocolate experience. It is Soft, Fresh and Tasty. ",
    weight: "Net Weight: 600g",
    category: "right",
  },
  {
    image: blisco1,
    title: "BLISCO CLASSIC GOLD",
    info: "This is our Flagship Toast Bread, it is produced with the best quality ingredients that are good for your body. it is very soft, always fresh and tasty. it contains mixed fruits and spices ",
    weight: "Net Weight: 1kg",
  },
  {
    image: BliscoCakeBread,
    title: "BLISCO CAKE BREAD",
    info: "Blisco Cake Bread is our Premium Sliced Bread, it is delicious and tastes like Cake, very fluffy and Unique taste.it is moderate in Size and can serve as both breakfast and used for toast.",
    weight: "Net Weight: 850g",
    category: "right",
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
    category: "right",
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
    category: "right",
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
    category: "right",
  },
];

export default function ProductsDisplay() {
  useEffect(() => {
    AOS.init({ duration: 1000 }), [];
  });
  return (
    <div className="w-full overflow-hidden h-fit items-center flex flex-col font-ralewaay product-main">
      <Navbar />
      <WhatsApp />
      <ScrollToTop />
      <div className="w-full flex flex-col mt-[80px] justify-center items-center">
        <Intro />
        <div className="w-full md:w-[90%] flex flex-row">
          <div className="h-fit w-full gap-14 justify-center items-center my-10 flex flex-col">
            {Details.map((item, index) => {
              return <ProductDesign key={index} itemObj={item} />;
            })}
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export function ProductDesign({ itemObj }) {
  return (
    <div
      className={`flex flex-col  md:gap-0 gap-10 cursor-pointer md:flex-row justify-between md:items-start items-center w-full h-fit md:h-[300px] rounded-lg px-4 md:px-12 z-20 ${
        itemObj.category && "md:flex-row-reverse"
      }`}
    >
      <div className="w-[90%] md:w-[50%] h-fit flex flex-col justify-center gap-3">
        <h1 className="font-bold text-xl md:text-3xl">
          {itemObj.title}
          <p className="text-sm">{itemObj.weight}</p>
        </h1>
        <p className="h-[2px] w-[130px] bg-red-600"></p>
        <p className="leading-relaxed text-justify text-sm">{itemObj.info}</p>
      </div>
      <div
        data-aos="fade-left"
        className="w-[90%] shadow-lg md:w-[35%] h-[300px] md:h-[100%] flex justify-center items-center bg-[#f2c14e] md:mb-0 overflow-hidden"
      >
        <img
          src={itemObj.image}
          className="h-full w-full md:w-full md:h-full drop-shadow-lg object-cover"
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
        <div className="md:w-[65%] flex gap-4 md:gap-12 flex-col">
          <h1
            data-aos="fade-right"
            className="text-2xl md:text-4xl font-bold text-primary-color uppercase"
          >
            Our Products
          </h1>
          <p data-aos="fade-left" className="text-justify leading-relaxed">
            At Blisco Foods, we believe that the best moments in life are
            savored with a delicious treat in hand. Blisco Foods and Beverages
            Products are produced with Selection of Best Quality Food Grade
            Ingredients and Raw materials approved by NAFDAC to give you soft,
            fresh and Delicious quality Products that are healthy and good for
            your family Enjoyment
          </p>
        </div>
      </div>
    </div>
  );
};
