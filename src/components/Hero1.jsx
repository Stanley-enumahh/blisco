import HeroImage1 from "../assets/BLISCO HEADER.png";
import HeroImageMobile from "../assets/header 2.png";

export const Hero1 = () => {
  return (
    <>
      <div className="z-0 flex flex-col h-fit md:h-screen w-full ">
        <div className="md:h-full h-fit flex justify-center items-center w-full">
          <img
            src={HeroImage1}
            className="h-[300px] md:h-[85%] flex w-full object-cover mt-[80px]"
            alt="HeroIMage"
          />
          {/* <img
            src={HeroImageMobile}
            className=" md:hidden flex w-full object-contain mt-0 md:mt-[80px]"
            alt="HeroIMage"
          /> */}
        </div>
      </div>
    </>
  );
};
