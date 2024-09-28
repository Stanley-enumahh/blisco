import { Navbar } from "../components/Navbar";
import Teachocomilk from "../assets/blisco tea-choco.png";
import BliscoBreadCake from "../assets/blisco cake bread.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import products from "../assets/IMG_20231106_171541_880@-1909798223.jpg";
import BliscoClissicgold from "../assets/blisco classic gold.png";
import Bliscoroundbread from "../assets/blisco round bread.png";
import BliscoCoconutBread from "../assets/blisco coconut bread.png";
import BliscoJumbBread from "../assets/blisco jumbo bread.png";
import BliscoPeanut from "../assets/blisco peanut.png";
import BliscoChinChin from "../assets/blisco chin chin.png";
import BliscoMultiGrain from "../assets/blisco multigrain.png";
import BliscoCakeBread from "../assets/blisco cake bread.png";
import { Footer } from "../components/footer";
import ScrollToTop from "../components/Navbar";

const Details = [
  {
    image: BliscoBreadCake,
    title: "BLISCO ECONOMY BREAD",
    info: "This is our Pocket Friendly Bread. It is rich in taste and Quality very soft and tasty",
    weight: "Net Weight is 1.2kg",
  },
  {
    image: Teachocomilk,
    title: "TEA-CHOCO-MILK",
    info: "If you have unique taste for chocolate this product is for you.Blisco Tea-Choco-Milk Bread is a unique recipe for Lovers of Chocolate . It is made with 100% Chocolate, Cocoa Powder and Tea, and Milk. Every bite gives you that Chocolate experience. It is Soft, Fresh and Tasty. ",
    weight: "Net Weight is 600g",
  },
  {
    image: BliscoClissicgold,
    title: "BLISCO CLASSIC GOLD",
    info: "This is our Flagship Toast Bread, it is produced with the best quality ingredients that are good for your body. it is very soft, always fresh and tasty. it contains mixed fruits and spices ",
    weight: "Net Weight is 1kg",
  },
  {
    image: BliscoCakeBread,
    title: "BLISCO CAKE BREAD",
    info: "Blisco Cake Bread is our Premium Sliced Bread, it is delicious and tastes like Cake, very fluffy and Unique taste.it is moderate in Size and can serve as both breakfast and used for toast.",
    weight: "Net Weight is 850g",
  },
  {
    image: Bliscoroundbread,
    title: " BLISCO ROUND BREAD",
    info: "This the Smallest bread in our Product Line. it is soft, fluffy and contains fruit inside. it is consumed by both young and Adult",
    weight: " Net Weight is 200g",
  },
  {
    image: BliscoChinChin,
    title: "BLISCO CHIN CHIN",
    info: "Blisco Chin Chin is made with high quality ingredients and it has a unique and superior taste. The chin chin is crispy and delicious and contains less fat. it is enriched with nutrients that help to promote good healthy living",
    weight: "Net Weight is 50g",
  },
  {
    image: BliscoCoconutBread,
    title: " BLISCO COCONUT BREAD",
    info: "Baked with Raw Desiccated Coconut, made from freshly processed natural coconut seeds. Blisco coconut Bread is an artisan Bread, carefully crafted and baked with unique recipe to give you the natural feel of coconut mixed with bread. This is a complete delicacy. Every bite will make you feel nature's true essence of enjoyment.",
    weight: "Net Weight is 1.3kg",
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
    weight: "Net Weight is 50g",
  },
  {
    image: BliscoMultiGrain,
    title: "BLISCO MULTIGRAIN BREAD ",
    info: "Blisco Multigrain Bread is produced with Whole Wheat Flour, Plantain Flour, Sorghum Oat and spices that help to promote health. It has no added sugar. It is produced for Health Conscious individual who wants less Sugar and more Fibre in their Diet",
    weight: "Net Weight is 850g",
  },
];

export default function ProductsDisplay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-full bg-[#f2c14e] h-fit items-center flex flex-col font-ralewaay">
      <Navbar />
      <ScrollToTop />
      <div className="w-full flex flex-col mt-[80px] justify-center items-center">
        <Intro />
        <div className="w-full md:w-[90%] h-[700px]  md:h-fit justify-center flex flex-row">
          <Slider
            {...settings}
            className="md:w-full w-full md:my-[40px] mb-[20px] h-[620px] md:h-fit  cursor-pointer my-11"
          >
            {Details.map((Design, index) => {
              return <ProductDesign Data={Design} key={index} />;
            })}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function ProductDesign(props) {
  const { image, title, info, weight } = props.Data;
  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-center h-full md:h-full gap-0 md:gap-10 rounded-lg px-4 md:px-12">
      <div className="w-full md:w-[45%] h-fit flex flex-col justify-center gap-3">
        <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
        <p className=" text-justify">{info}</p>
        <p className="text-xs">{weight}</p>
      </div>

      <img
        src={image}
        className="h-fit w-[80%] md:w-[85%] md:h-[450px] drop-shadow-lg object-contain"
      />

      <ScrollToTop />
    </div>
  );
}
<div className="h-[300px] border-4 md:h-[500px] w-full md:w-[60%] flex justify-center items-center"></div>;

const Intro = () => {
  return (
    <div className=" relative h-[450px] md:h-[400px] w-full font-ralewaay">
      <img src={products} className="h-full w-full object-cover" alt="" />
      <div className="absolute Bakery-overlay top-0 w-full h-full left-0 p-5 md:pl-[100px] flex justify-center flex-col text-white">
        <div className="md:w-[70%] flex gap-3 flex-col">
          <h1>
            <span className="text-primary-color font-bold">Welcome to </span>
            <br />
            <span className="text-3xl font-bold text-primary-color">
              Blisco foods
            </span>{" "}
            Where Every Bite Feels Like Home!
          </h1>
          <p className="text-justify">
            At BliscoFoods, we believe that the best moments in life are savored
            with a delicious treat in hand. Blisco Foods and Beverages Products
            are produced with Selection of Best Quality Food Grade Ingredients
            and Raw materials approved by NAFDAC to give you soft, fresh and
            Delicious quality Products that are health and good for your family
            Enjoyment
          </p>
        </div>
      </div>
    </div>
  );
};
