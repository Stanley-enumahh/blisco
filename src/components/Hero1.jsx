import HeroImage1 from "../assets/LINE OF PRODUCTS.png";

export const Hero1 = () => {
  return (
    <>
      <div className="z-0 flex flex-col h-[400px] md:h-screen w-full ">
        <div className="md:h-full md:mt-0 mt-[100px] h-[50%] flex justify-center items-center ">
          <img
            src={HeroImage1}
            className="h-[80%] w-[80%] object-cover md:w-fit mt-[70px] drop-shadow-2xl"
            alt="HeroIMage"
          />
        </div>
      </div>
    </>
  );
};
