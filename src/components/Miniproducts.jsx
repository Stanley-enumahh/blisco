import BliscoBreadCake from "../assets/blisco3.png";
import BliscoClissicgold from "../assets/blisco8.png";
import Bliscoroundbread from "../assets/blisco4.png";
import BliscoCoconutBread from "../assets/blisco7.png";
import BliscoJumbBread from "../assets/blisco6.png";
import BliscoPeanut from "../assets/blisco10.png";
import BliscoChinChin from "../assets/blisco9.png";
import BliscoMultiGrain from "../assets/blisco5.png";
import BliscoCakeBread from "../assets/blisco3.png";
import blisco1 from "../assets/blisco1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MiniProduct() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-fit md:h-[200px] py-4 md:pt-[30px] w-full">
      <Slider {...settings}>
        {Details.map((item, index) => {
          return <MiniProductDesign key={index} Data={item} />;
        })}
      </Slider>
    </div>
  );
}

const MiniProductDesign = (props) => {
  const { image } = props.Data;
  return (
    <div className="w-[120px] h-full flex justify-center items-center">
      <img
        src={image}
        alt=""
        className="md:w-full w-[140px] h-[120px] md:h-[150px] object-contain md:object-fill"
      />
    </div>
  );
};

const Details = [
  {
    image: BliscoBreadCake,
  },
  {
    image: blisco1,
  },
  {
    image: BliscoClissicgold,
  },
  {
    image: BliscoCakeBread,
  },
  {
    image: Bliscoroundbread,
  },
  {
    image: BliscoChinChin,
  },
  {
    image: BliscoCoconutBread,
  },
  {
    image: BliscoJumbBread,
  },
  {
    image: BliscoPeanut,
  },
  {
    image: BliscoMultiGrain,
  },
];
