import { Navbar } from "../components/Navbar";
import ContactImg from "../assets/pexels-maria-fernanda-perez-1038050-2128535.jpg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { Footer } from "../components/footer";
import { Newsletter } from "../components/Newsletter";
import ScrollToTop from "../components/Navbar";
import { WhatsApp } from "./Homepage";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u5r9oz5", "template_uzal6xq", form.current, {
        publicKey: "qFre4Kf5R8DrTNgbY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-full flex flex-col font-ralewaay overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <WhatsApp />
      <div className="w-full">
        <div className="h-[370px] relative w-full flex flex-row mt-[80px]">
          <div className="w-full md:w-[50%] md:static absolute h-full flex flex-col gap-4 justify-center items-center md:text-black text-white select-none">
            <p>Contact</p>
            <p className="h-[2px] w-[100px] bg-red-600"></p>
            <h1 className="text-4xl font-bold drop-shadow-md md:drop-shadow-none">
              Get In Touch With Us
            </h1>
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={ContactImg}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6 pt-[70px] pb-[70px] justify-evenly bg-[#ebebeb] md:h-[380px] h-fit items-center">
          <div className="flex flex-col gap-5 rounded-sm justify-center items-center bg-white w-[330px] md:w-[300px] h-[280px] md:h-[300px] select-none">
            <span>
              <HiOutlineMailOpen className="text-primary-color text-5xl" />
            </span>
            <h2 className="font-bold">Email</h2>
            <p className="flex flex-row font-semibold">bliscofoods@gmail.com</p>
          </div>

          <div className="flex flex-col gap-5 rounded-sm justify-center items-center bg-white w-[330px] md:w-[300px] h-[280px] md:h-[300px] select-none">
            <span>
              <FaPhone className="text-primary-color text-5xl" />
            </span>
            <h2 className="font-bold">Call</h2>
            <div className="flex flex-row font-semibold">
              <p> +2349027197201,</p>
              <p> +2347031058606</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-sm justify-center items-center bg-white w-[330px] md:w-[300px] h-[280px] md:h-[300px] text-center p-4 select-none">
            <span>
              <FaLocationDot className="text-primary-color text-5xl" />
            </span>
            <h2 className="font-bold">Address</h2>
            <p className="font-semibold">
              No. 7 Ezigbo Street, Behind Old NEPA Office, Nnobi Road Nnewi,
              Nnewi North L.G.A Anambra State, Nigeria
            </p>
          </div>
        </div>

        <div className="w-full h-fit md:h-[600px] flex justify-center p-0 md:p-14">
          <div className="md:w-[80%] w-[90%] flex flex-col md:flex-row gap-10">
            <div className="md:w-[50%] w-full h-fit md:h-full flex flex-col justify-center items-center md:items-start md:pt-0 pt-5 md:pb-[200px] gap-3">
              <p>Want to reach us for business?</p>
              <p className="h-[2px] w-[100px] bg-red-600"></p>
              <h1 className="font-bold text-4xl">Send Us a Message</h1>
            </div>
            {/* <div className="md:w-[55%] w-full flex flex-col gap-4 items-center justify-center">
              <div className="flex-col gap-4 md:gap-0 md:flex-row flex justify-between w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-3"
                />
                <input
                  type="text"
                  placeholder="Email address"
                  className="border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-3"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone number"
                className="border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-3 w-full"
              />

              <input
                type="text"
                placeholder="Message"
                className=" border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-[70px] w-full"
              />
              <button className=" px-2 py-2 w-full rounded text-black shadow-lg hover:bg-primary-color flex flex-row gap-2 justify-center items-center md:mb-0 mb-8 font-bold transition-all duration-150 bg-[#ebebeb]">
                Submit <CiLocationArrow1 />
              </button>
            </div> */}
            <form
              className="md:w-[55%] w-full flex flex-col gap-4 items-center justify-center"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex-col gap-4 md:gap-0 md:flex-row flex justify-between w-full">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="Name"
                  className="border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-3"
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="email"
                  className="border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-3"
                />
              </div>
              <input
                type="tel"
                name="from_phoneNumber"
                id=""
                placeholder="Phone number"
                className="border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-3 w-full"
              />

              <textarea
                name="message"
                placeholder="Message"
                className=" border-2 bg-transparent border-primary-color outline-none rounded-lg px-5 py-[70px] w-full"
              />
              <input
                type="submit"
                value="Send"
                className="px-2 py-2 w-full rounded text-black shadow-lg hover:bg-primary-color flex flex-row gap-2 justify-center items-center md:mb-0 mb-8 font-bold transition-all duration-150 bg-[#ebebeb] cursor-pointer"
              />
            </form>
            ;
          </div>
        </div>
        <LiveMap />
        <Newsletter />
      </div>
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export const LiveMap = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] md:w-[80%] rounded drop-shadow-xl h-full flex justify-center my-12 items-center">
        <iframe
          className="h-[350px] md:h-[400px] w-full"
          scrolling="no"
          src="https://maps.google.com/maps?width=520&amp;height=500&amp;hl=en&amp;q=No.%207%20Ezigbo%20Street,%20Behind%20Old%20NEPA%20Of%20fice%20%20Nnobi%20Road%20Nnewi,%20Nnewi%20North%20L.G.A%20%20Anambra%20State,%20Nigeria+(BLISCO%20FOODS%20&amp;%20BEVERAGES%20INDUSTRIES)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </div>
  );
};
