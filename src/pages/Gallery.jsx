import { Navbar } from "../components/Navbar";
import galleryHero from "../assets/snacks.jpg";
import g1 from "../assets/stack of bread.jpg";
import g2 from "../assets/stack of bread2.jpg";
import g3 from "../assets/stack of oven.jpg";
import g4 from "../assets/kitchen img.jpg";
import g5 from "../assets/freshbread2.jpg";
import g6 from "../assets/fresh bread.jpg";
import g7 from "../assets/freshbread3.jpg";
import { Footer } from "../components/footer";
import { WhatsApp } from "./Homepage";
import ScrollToTop from "../components/Navbar";

const Details = [
  {
    image: g1,
  },
  {
    image: g2,
  },
  {
    image: g3,
  },
  {
    image: g4,
  },
  {
    image: g5,
  },
  {
    image: g6,
  },
  {
    image: g7,
  },
];

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <div className="w-full flex flex-col overflow-hidden gap-4 bg-[#ebebeb]">
        <div className="relative w-full h-[400px] mt-[70px] ">
          <img
            src={galleryHero}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute flex text-neutral-100 items-center w-full h-full top-0 left-0 gallery-overlay">
            <h1 className="text-5xl md:text-6xl ml-[100px] select-none font-bold uppercase">
              our Gallery
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-center h-fit my-10">
          <div className="w-[80%] h-fit flex flex-col md:flex-row gap-10 justify-start items-center flex-wrap">
            {Details.map((item, index) => {
              return <GalleryDesign key={index} Data={item} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const GalleryDesign = (props) => {
  const { image } = props.Data;
  return (
    <div className="w-[90%] md:w-[330px] h-[350px] gallerpix overflow-hidden cursor-pointer">
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
  );
};
