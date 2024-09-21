import Logo from "../assets/LOGO.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="md:h-[470px] h-fit w-full flex flex-col bg-[#131b23] text-white justify-between md:p-8 pt-6 md:pt-16 items-center font-ralewaay">
      <div className="md:w-[100%] w-[90%] md:gap-0 gap-7 flex-col h-fit flex md:flex-row justify-evenly ">
        <div className=" flex flex-col gap-1">
          <div className="p-3 w-[140px] h-[140px] ">
            <img src={Logo} className="w-[100%] h-[80%]" alt="Blisco" />
          </div>
          <h2 className="font-bold text-2xl">
            BLISCO FOODS & <br /> BEVERAGES INDUSTRIES
          </h2>
        </div>
        {/* contact */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-3 text-2xl">Location</h2>
          <p className="text-sm">
            No. 7 Ezigbo Street, Behind Old NEPA Of fice
          </p>
          <p className="text-sm">Nnobi Road Nnewi, Nnewi North L.G.A</p>
          <p className="text-sm">Anambra State, Nigeria</p>
          <p className="text-sm">+2349027197201</p>
          <p className="text-sm">+2347031058606</p>
          <p className="text-sm">bliscofoods@gmail.com</p>
        </div>

        {/* star Products */}
        <div className="flex flex-col text-sm gap-2">
          <h2 className="font-bold mb-3 text-2xl">Star products</h2>
          <p>Blisco classic gold bread</p>
          <p>Blisco jumbo bread</p>
          <p>Blisco cake bread</p>
        </div>

        <div className="flex flex-col text-xl gap-2">
          <h1 className="font-bold text-2xl">Follow Us</h1>
          <div className="flex flex-row gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:-translate-y-2 transition-all duration-150" />
            <IoLogoWhatsapp className="cursor-pointer hover:-translate-y-2 transition-all duration-150" />
            <FaTwitter className="cursor-pointer hover:-translate-y-2 transition-all duration-150" />
          </div>
        </div>
      </div>
      <div className="md:w-full w-[90%] md:mt-0 mt-4 border-t border-white flex justify-center items-center h-[50px]">
        <Copyright />
      </div>
    </div>
  );
};

const Copyright = () => {
  return (
    <p className="text-xs">
      All rights reserved &copy; {new Date().getFullYear()} | Designed by
      <a href="#"> ALPHAGFXS</a>
    </p>
  );
};
