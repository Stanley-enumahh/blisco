import AboutImage from "../assets/breadStand.jpg";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";

export const HeroAbout = () => {
  return (
    <div className="w-full flex relative justify-center h-fit md:h-[550px] pt-[60px] bg-[#fbf9ff] ">
      <div className="md:w-[85%] w-[90%] h-[80%] flex flex-col md:flex-row justify-between items-center">
        <div className="h-full w-full md:w-[40%]">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row gap-3 items-center ">
              <h1 className="font-bold text-xl md:text-2xl text-nowrap">
                About BliscoFoods and Beverages
              </h1>
              <p className="bg-red-600 h-[2px] w-[100px]"></p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="font-semibold">
                Welcome to BliscoFoods and Beverages, home to Anambra's finest
                bread and pastries. <br />
              </p>
              <p className="text-justify">
                {" "}
                Since its inception in August of xxxx, Blisco Foods and
                Beverages has since grown to become a synonym for fresh quality
                bread in the capital city. Made with passion and utmost care,
                our loaves are rich in nutrients that leave you and your family
                satisfied and smiling. What better way to start your day than to
                indulge in Blisco quality loaves
              </p>
              <button className=" px-2 py-2 w-fit rounded text-black shadow-lg bg-primary-color flex flex-row gap-2 justify-center items-center md:mb-0 mb-8 font-bold transition-all duration-150 hover:bg-[#ebebeb] mt-3">
                <Link className="flex flex-row gap-2 items-center" to="/about">
                  Read more <RxArrowTopRight />
                </Link>
              </button>
            </div>
          </div>{" "}
        </div>
        <div className="bg-primary-color shadow-md md:rounded-br-3xl z-0 w-[50%] md:w-[20%] h-[20%] md:h-[50%] absolute bottom-0 md:bottom-[50px] right-0 md:right-[50px]"></div>
        <div className="h-[400px] z-10 md:mb-0 mb-[40px] md:h-full w-full md:w-[45%] border-r-[5px] border-b-[8px] border-secondaryColor shadow-lg p-4">
          <img
            src={AboutImage}
            alt="About Image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
