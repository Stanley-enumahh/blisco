import { Navbar } from "../components/Navbar";
import galleryHero from "../assets/mink-mingle-qZ5lPCPvdXE-unsplash.jpg";
import breadstand1 from "../assets/stack of bread.jpg";
import breadstand2 from "../assets/stack of bread2.jpg";
import ovenstand from "../assets/stack of oven.jpg";
import kitchenImg from "../assets/kitchen img.jpg";
import freshbread from "../assets/fresh bread.jpg";
import { Footer } from "../components/footer";

const Details = [
  {
    image: breadstand1,
  },
  {
    image: ovenstand,
  },
  {
    image: breadstand2,
  },
  {
    image: kitchenImg,
  },
  {
    image: freshbread,
  },
];

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col gap-4 bg-[#ebebeb]">
        <div className="relative w-full h-[400px] mt-[70px] ">
          <img
            src={galleryHero}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute flex text-neutral-100 justify-center items-center w-full h-full top-0 left-0 gallery-overlay">
            <h1 className="text-6xl md:text-8xl select-none font-bold">
              Gallery
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-center h-fit my-10">
          <div className="w-[90%] h-fit flex flex-col md:flex-row gap-10 justify-start items-center flex-wrap">
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
    <div className="w-[90%] md:w-[270px] h-[300px] gallerpix rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200">
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
  );
};
