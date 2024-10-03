import { Navbar } from "../components/Navbar";
import ScrollToTop from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WhatsApp } from "./Homepage";

export default function Distributor() {
  useEffect(() => {
    AOS.init({ duration: 1000 }), [];
  });
  return (
    <div className="w-full h-fit flex flex-col bg-[#f6f9ff] overflow-hidden">
      <Navbar />
      <WhatsApp />
      <ScrollToTop />
      <div className="mt-[100px]  flex flex-col justify-center  items-center gap-6 mb-8 md:mb-12">
        <div className="w-[90%]">
          <div
            data-aos="fade-right"
            className="flex bg-primary-color items-center
           h-[100px] md:h-[200px] justify-center rounded-lg shadow-lg"
          >
            <h1 className="text-2xl md:text-4xl font-bold">
              APPLICATION PROCESS
            </h1>
          </div>
        </div>

        <div className="w-[90%] flex flex-col md:gap-0 gap-4 md:flex-row">
          <div className="w-full justify-center items-center md:w-[40%] flex flex-col gap-2 mb-3">
            <p className="font-semibold text-lg text-gray-600">
              Apply to become one of our distributors
            </p>
            <p className="h-[2px] w-[60px] bg-red-600"></p>
          </div>
          <div
            data-aos="fade-up"
            className="w-full md:w-[55%] rounded py-10 px-5 flex bg-secondaryColor text-neutral-100 text-justify "
          >
            We are looking to collaborate with individuals and organisations who
            are interested in distributing our products. Fill in the below space
            with the required information and we will get back to you.
          </div>
        </div>
        {/* form */}
        <div className="w-[90%] h-fit md:w-[60%] pt-5 flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
            <label htmlFor="business-name">Business name :</label>
            <input
              type="text"
              name=""
              id="business-name"
              placeholder="business name"
              className="outline-none border border-primary-color px-3 py-2 bg-transparent w-full md:w-[600px] rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
            <label htmlFor="tel">Tel :</label>
            <input
              type="tel"
              name=""
              id="tel"
              placeholder="telephone number"
              className="outline-none border border-primary-color px-3 py-2 bg-transparent w-full md:w-[600px] rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="email"
              className="outline-none border border-primary-color px-3 py-2 bg-transparent w-full md:w-[600px] rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
            <label htmlFor="address">Business address:</label>
            <input
              type="text"
              name=""
              id="address"
              placeholder="Business address"
              className="outline-none border border-primary-color px-3 py-2 bg-transparent w-full md:w-[600px] rounded-lg"
            />
          </div>
          {/* territory */}
          <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
            <label htmlFor="address">Territory:</label>
            <input
              type="text"
              name=""
              id="address"
              placeholder="state the territory where you will be distributing our products"
              className="outline-none border border-primary-color px-3 py-2 bg-transparent w-full md:w-[600px] rounded-lg"
            />
          </div>
          {/* product */}
          <div className="flex flex-col items-center w-full gap-4 h-fit">
            <div className="w-full flex justify-center">
              <p className="lowercase font-semibold text-center mb-4 md:text-lg">
                PLEASE TICK THE PRODUCTS YOU ARE INTERESTED IN
              </p>
            </div>
            {/* products main */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit md:w-[60%] mb-5 gap-5 md:gap-8">
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor="Blisco Jumbo Bread">Blisco Jumbo Bread</label>
                <input type="radio" name="" id="Blisco Jumbo Bread" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor="Blisco Jumbo Bread">
                  Blisco Classic Gold Bread
                </label>
                <input type="radio" name="" id="Blisco Jumbo Bread" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor="Blisco Jumbo Bread">Blisco Cake Bread</label>
                <input
                  type="radio"
                  name=""
                  id="Blisco Jumbo Bread"
                  placeholder="Blisco Jumbo Bread"
                />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor="Blisco Coconut Bread">
                  Blisco Coconut Bread
                </label>
                <input type="radio" name="" id="Blisco Coconut Bread" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor="Blisco Round Bread">Blisco Round Bread</label>
                <input type="radio" name="" id="Blisco Round Bread" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor=" Blisco Family Bread">
                  Blisco Family Bread
                </label>
                <input type="radio" name="" id=" Blisco Family Bread" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor=" Blisco Milk/Choco Bread">
                  Blisco Milk/Choco Bread
                </label>
                <input type="radio" name="" id=" Blisco Milk/Choco Bread" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor="Blisco Multi Grain Bread">
                  Blisco Multi Grain Bread
                </label>
                <input type="radio" name="" id="Blisco Multi Grain Bread" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor="Blisco Peanuts">Blisco Peanuts</label>
                <input type="radio" name="" id="Blisco Peanuts" />
              </div>
              <div className="flex flex-row  text-nowrap w-fit md:w-[220px] justify-between md:gap-4 gap-5 items-center md:items-center">
                <label htmlFor=" Blisco Chin Chin ">Blisco Chin Chin</label>
                <input type="radio" name="" id=" Blisco Chin Chin " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
