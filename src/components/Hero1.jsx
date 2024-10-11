import HeroImage1 from "../assets/BLISCO HEADER.png";
import HeroImage2 from "../assets/header 4 (2).png";

export default function Hero1() {
  return (
    <>
      <div className="z-0 flex flex-col  h-fit w-full bg-[#fbf9ff] ">
        <div className="md:h-full h-fit flex justify-center items-center w-full">
          <img
            src={HeroImage1}
            className="md:flex hidden md:h-[60%] w-full object-cover mt-[80px]"
            alt="HeroIMage"
          />
          <img
            src={HeroImage2}
            className="md:hidden flex bg-red-300 h-[300px] w-full object-cover mt-[80px]"
            alt="HeroIMage"
          />
        </div>
      </div>
    </>
  );
}
