import { Navbar } from "../components/Navbar";
import AboutImg from "../assets/stack of oven.jpg";
import { CgMoreVertical } from "react-icons/cg";
import { RxArrowTopRight } from "react-icons/rx";
import { GrTarget } from "react-icons/gr";
import { TbGrowth } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { Footer } from "../components/footer";
import ScrollToTop from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WhatsApp } from "./Homepage";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }), [];
  });
  return (
    <div className="w-full h-fit flex flex-col font-ralewaay overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <WhatsApp />
      <div className="w-full flex-col mt-[80px]">
        <div className="w-full h-[350px] relative">
          <img className="w-full h-full object-cover" src={AboutImg} alt="" />
          <div className="absolute overlay w-full top-0 h-full  text-white  items-center flex">
            <h1
              data-aos="fade-right"
              className="md:ml-[100px] ml-7 text-4xl font-bold text-primary-color"
            >
              ABOUT US
            </h1>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center items-center">
          <div className="md:w-[90%] w-full flex flex-col md:flex-row gap-6 md:gap-9 md:justify-between justify-center mt-[40px] md:mt-[70px]">
            <div className="flex flex-col md:gap-5 gap-3 w-full md:items-start items-center md:w-[50%]">
              <div className="flex flex-row items-center text-2xl">
                <h1 className="font-bold ml-5 uppercase">About Blisco foods</h1>
                <CgMoreVertical className="text-secondaryColor" />
              </div>
              <div className="flex w-[90%] md:w-full flex-col md:gap-6 text-start">
                <p
                  data-aos="fade-in"
                  className="flex flex-col gap-4 hover:bg-[#ebebeb] p-5 cursor-pointer transition-all duration-200 hover:shadow-md text-justify"
                >
                  Blisco Foods and Beverages industries is one of the emerging
                  modernized Food Industry with State of the art Modern
                  Facilities Located in Nnewi, Anambra State, Nigeria. The
                  company focuses on commercial production of bakery goods such
                  as different varieties of Bread, confectionaries products Like
                  Chin Chin and Peanuts. Also the company engages in the
                  production of both Alcoholic and Non Alcoholic Beverages.
                </p>
                <div className="flex flex-col gap-4 hover:bg-[#ebebeb] p-5 cursor-pointer transition-all duration-200 hover:shadow-md">
                  <h2 className="font-bold text-white bg-secondaryColor w-fit flex flex-row gap-2 items-center px-4 uppercase">
                    Our History <RxArrowTopRight />
                  </h2>
                  <p data-aos="fade-in" className="text-justify">
                    Blisco Foods and Beverages Industries was incorporated on
                    the 11th Day of March 2021 with Corporate Affairs Commission
                    (CAC) with registration number BN: 3323792. The products of
                    the company are registered with National Agency for Food and
                    Drug Administration and Control (NAFDAC).
                  </p>
                </div>
              </div>
            </div>
            {/* right div */}
            <div className="flex flex-col gap-4 w-full md:w-[70%] items-center mb-6">
              <div className="flex flex-col md:w-full w-[90%] gap-4 hover:bg-[#ebebeb] p-5 cursor-pointer transition-all duration-200 hover:shadow-md">
                <h2 className="font-bold text-white bg-secondaryColor w-fit flex flex-row gap-2 items-center px-3 uppercase">
                  Our management <RxArrowTopRight />
                </h2>
                <p data-aos="fade-in" className="text-justify">
                  The Management and Staff of Blisco Foods and Beverages
                  Industry are made up of young, energetic, vibrant and
                  dedicated Professionals, with strong background in Food
                  Science And Technology. Business Management and Accounting,
                  supported by well trained and Skilled Workforce who work
                  tirelessly to ensure product quality consistency and
                  availability at all times; with top notch quality service to
                  our customers. The company also has strong sales and marketing
                  force with good logistics arrangement to ensure our products
                  get to every noon and cranny of our environs and ensure
                  customer satisfaction.
                </p>
              </div>
              <div
                data-aos="fade-in"
                className="flex flex-col  md:w-full w-[90%] gap-4 hover:bg-[#ebebeb] p-5 cursor-pointer transition-all duration-200 hover:shadow-md"
              >
                <h2 className="font-bold text-white bg-secondaryColor w-fit flex flex-row gap-2 items-center px-4 uppercase">
                  Our Impact <RxArrowTopRight />
                </h2>
                <p className="text-justify">
                  The Company’s iconic food brand “Blisco” is a household name
                  that is trusted by many for Good quality food products and
                  daily nourishment and enjoyment. Our Products are produced
                  with selection of the best quality raw materials, both within
                  and outside the country to ensure we produce premium quality
                  Products for our consumers. We have varieties of Bread, Peanut
                  and Chin Chin which is available in all retail stores within
                  Nigeria. At Blisco Foods and Beverages Industries
                  <p>
                    we hold our customers to highest esteem, so customer
                    satisfaction is our priority. We treat every customer like a
                    King and Queen and we ensure product quality Consistency and
                    best quality products are supplied to our customers at all
                    times. Get in touch with us today and experience the best
                    quality products in Nigeria.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* values */}
        <Value />
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export const Emblem = () => {
  return (
    <div
      data-aos="fade-down"
      className="md:w-[80%] w-[90%] justify-center text-center md:text-start items-center mb-7 mt-7 flex flex-col gap-3 md:gap-5 text-primary-color"
    >
      <h1 className="md:text-4xl text-2xl font-bold">
        EXPERIENCE BAKING EXCELLENCE
      </h1>
      <p>GREAT BAKED GOODS TO KEEP YOU COMING BACK FOR MORE</p>
    </div>
  );
};

export const Value = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-3 md:p-14 bg-secondaryColor md:mt-6 ">
      <Emblem />
      <div className="w-full md:w-[80%] items-center flex-col md:flex-row flex gap-8 md:justify-evenly justify-center">
        {/* one value start*/}
        <div
          data-aos="fade-right"
          className="w-[330px] md:w-[300px] h-[260px] md:h-[300px] rounded duration-200 transition-all flex p-4 flex-col justify-between border border-gray-300"
        >
          <div className="p-4 rounded-full bg-primary-color text-white w-fit">
            <GrTarget size={30} />
          </div>
          <div className="p-3 flex flex-col gap-2 cursor-pointer">
            <h1 className="text-primary-color font-bold">VISION STATEMENT</h1>
            <p className="text-neutral-200">
              To be the Most Preferred Food and Beverages Brand in every Home
              within and Outside Nigeria
            </p>
          </div>
        </div>
        {/* one value end*/}
        {/* one value start*/}
        <div className="w-[330px] md:w-[300px] h-[260px] md:h-[320px] p-4 rounded duration-200  flex flex-col justify-between border border-gray-300">
          <div
            data-aos="fade-in"
            className="p-4 rounded-full bg-primary-color text-white w-fit"
          >
            <TbGrowth size={30} />
          </div>
          <div className="p-3 flex flex-col cursor-pointer gap-2">
            <h1 className="text-primary-color font-bold">MISSION STATEMENT</h1>
            <p className="text-neutral-200">
              To consistently Produce and sell Premium Quality Products to our
              Customers with Excellent customer service experience at all times.
            </p>
          </div>
        </div>
        {/* core value */}
        <div
          data-aos="fade-left"
          className="w-[330px] md:w-[300px] h-fit md:h-[300px] p-6 text-white rounded duration-200 flex flex-col justify-center border border-gray-300"
        >
          <div className="flex flex-col gap-6 cursor-pointer">
            <div className="p-4 rounded-full bg-primary-color text-white w-fit">
              <AiOutlineTransaction size={30} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-primary-color font-bold">OUR CORE VALUES:</h1>
              <div className="flex flex-col">
                <p>
                  <span className="font-bold">P</span> - Premium Quality
                  Products
                </p>
                <p>
                  <span className="font-bold">I</span> - Integrity
                </p>
                <p>
                  <span className="font-bold">C</span> - Customer Satisfaction
                </p>
                <p>
                  <span className="font-bold">A</span> - Accountability
                </p>
                <p>
                  <span className="font-bold">R</span> - Respect
                </p>
                <p>
                  <span className="font-bold">T</span> - Transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
