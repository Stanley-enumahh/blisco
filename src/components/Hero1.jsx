import HeroImage1 from "../assets/BLISCO HEADER.png";
import HeroImage2 from "../assets/header 3.png";

export default function Hero1() {
  return (
    <>
      <div className="z-0 flex flex-col h-[400px] md:h-fit w-full bg-[#f6f9ff]">
        <div className="md:h-full h-fit flex justify-center items-center w-full">
          <img
            src={HeroImage1}
            className="h-[350px] flex md:h-[85%] w-full object-cover mt-[80px]"
            alt="HeroIMage"
          />
          {/* <img
            src={HeroImage2}
            className=" md:hidden flex bg-red-300 h-[200px] w-full object-cover mt-0"
            alt="HeroIMage"
          /> */}
        </div>
      </div>
    </>
  );
}
