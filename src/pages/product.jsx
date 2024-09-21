import { Navbar } from "../components/Navbar";
import Teachocomilk from "../assets/blisco tea-choco.png";
import BliscoBreadCake from "../assets/blisco cake bread.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import products from "../assets/LINE OF PRODUCTS.png";

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
];

export default function ProductsDisplay() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-fit items-center flex flex-col">
      <Navbar />
      <div className="w-full flex flex-col mt-[110px]">
        <Intro />
        <div className="w-[70%] h-[400px] mt-[150px] flex flex-row">
          <Slider {...settings} className="w-full h-full">
            {Details.map((Design, index) => {
              return <ProductDesign Data={Design} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export function ProductDesign(props) {
  const { image, title, info, weight } = props.Data;
  return (
    <div className="flex flex-row justify-between w-full items-center h-full gap-4 bg-primary-color p-5">
      <div className="w-[45%] h-full flex flex-col justify-center gap-3">
        <p className="text-neutral-200 text-xs">{weight}</p>
        <h1 className="font-bold text-3xl text-neutral-200">{title}</h1>
        <p className="text-neutral-200">{info}</p>
      </div>
      <div className="h-[400px] w-[60%] flex justify-center">
        <img src={image} className="h-full w-[75%] rotate-12 drop-shadow-lg" />
      </div>
    </div>
  );
}

const Intro = () => {
  return (
    <div className="Bakery-overlay relative h-[400px] w-full font-ralewaay">
      <img src={products} className="" alt="" />
      <div className="absolute">
        <h1>
          Welcome to <br />{" "}
          <span className="text-3xl font-bold">Blisco foods</span> Where Every
          Bite Feels Like Home
        </h1>
        <p>
          At [Your Bakery Name], we believe that the best moments in life are
          savored with a delicious treat in hand. Our passion for baking comes
          through in every product, whether you're enjoying a warm loaf of
          freshly baked bread, indulging in a decadent cake, or treating
          yourself to our handcrafted pastries. Using the finest ingredients, we
          craft a variety of bakery items that cater to every taste and
          occasion. From the classic favorites to innovative new flavors, we
          have something to delight every customer. Experience the love,
          tradition, and quality that go into every baked good at [Your Bakery
          Name].
        </p>
      </div>
    </div>
  );
};
