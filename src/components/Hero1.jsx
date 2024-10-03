import HeroImage1 from "../assets/BLISCO HEADER.png";

export default function Hero1() {
  return (
    <>
      <div className="z-0 flex flex-col h-fit md:h-fit w-full bg-[#f6f9ff]">
        <div className="md:h-full h-fit flex justify-center items-center w-full">
          <img
            src={HeroImage1}
            className="h-[330px] md:h-[85%] flex w-full object-cover mt-[80px]"
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
}
