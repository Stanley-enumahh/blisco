import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import teamPix from "../assets/adeolu-eletu-E7RLgUjjazc-unsplash.jpg";
import ScrollToTop from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WhatsApp } from "./Homepage";

export default function Careerr() {
  useEffect(() => {
    AOS.init({ duration: 2000 }), [];
  });
  return (
    <div className="w-full flex justify-center font-ralewaay overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <WhatsApp />
      <div className="w-full flex justify-center gap-10 items-center flex-col md:mt-[80px] mt-[70px]">
        <div className="w-full md:text-start text-center justify-center items-center flex flex-col gap-6 ">
          <div className="flex flex-col gap-4 md:gap-2 w-full relative">
            <img
              src={teamPix}
              className="h-[400px] w-full object-cover"
              alt=""
            />
            <div className="absolute select-none Career-pix w-full h-full flex flex-col justify-center gap-4 md:pl-[100px] text-white md:p-0 p-5">
              <h1 data-aos="fade-left" className="text-5xl font-bold">
                Join Our Team At
                <span className="text-primary-color">BliscoFoods</span>{" "}
              </h1>
              <p data-aos="fade-right">
                Join our superb team by submitting the required details below
                and we will get in touch with you
              </p>
            </div>
          </div>
          <div className="w-[90%] md:w-[60%] pt-5 flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="name"
                className="outline-none border border-primary-color px-3 py-2 bg-transparent w-full md:w-[600px] rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
              <label htmlFor="tel">Phone number :</label>
              <input
                type="tel"
                name=""
                id="tel"
                placeholder="phone number"
                className="outline-none border border-primary-color px-3 py-2 bg-transparent  w-full md:w-[600px] rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="email"
                className="outline-none border rounded-lg px-3 py-2 bg-transparent  w-full md:w-[600px] border-primary-color"
              />
            </div>
            <div className="flex flex-col justify-start md:gap-0 gap-3 items-start  md:flex-row md:justify-between md:items-center">
              <label htmlFor="name">Comments:</label>
              <input
                type="text"
                name=""
                id="comment"
                placeholder="write a short note on your qualities"
                className="outline-none border rounded-lg px-3 py-2 bg-transparent  w-full md:w-[600px] border-primary-color"
              />
            </div>
            <div className="flex flex-col justify-between items-start">
              <label htmlFor="CV">CV:</label>
              <input type="file" name="Cv" id="Cv" className=" py-2 " />
            </div>
            <div className="flex flex-col justify-between items-start">
              <label htmlFor="passport">Paasport photogragh:</label>
              <input type="file" name="Cv" id="passport" className=" py-2" />
            </div>
            <div className="flex flex-col justify-between items-start">
              <label htmlFor="passport">ID CARD:</label>
              <input type="file" name="Cv" id="ID" className="py-2" />
            </div>
          </div>

          <button className=" px-8 py-2 rounded text-black shadow-lg bg-primary-color flex flex-row gap-2 justify-center items-center md:mb-0 mb-8 font-bold transition-all duration-150 hover:bg-[#ebebeb]">
            Submit
          </button>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
