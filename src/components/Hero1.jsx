import HeroImage1 from "../assets/BLISCO HEADER.png";

export const Hero1 = () => {
  return (
    <>
      <div className="z-0 flex flex-col h-[400px] md:h-screen w-full ">
        <div className="md:h-full md:mt-0 mt-[100px] h-[50%] flex justify-center items-center w-full">
          <img
            src={HeroImage1}
            className="h-[85%] w-full object-cover mt-[80px]"
            alt="HeroIMage"
          />
        </div>
      </div>
    </>
  );
};
