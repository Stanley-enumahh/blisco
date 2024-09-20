import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const toggleSidebar = () => {
    setsidebar(!sidebar);
  };
  const [dropDown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropDown);
    console.log(400);
  };
  return (
    <div className="flex w-full h-fit justify-center py-2 z-50 bg-[#fbf9ff] fixed">
      <div className="w-[90%] h-fit flex flex-row justify-between items-center">
        <div className="w-fit h-[70px] p-2 overflow-hidden flex justify-center items-center">
          <img
            src={Logo}
            className="md:w-full w-[50px] cursor-pointer md:h-full h-[50px] object-cover drop-shadow-lg"
            alt="Blisco"
          />
        </div>
        <nav className="flex z-50">
          <ul
            className={`flex md:flex-row md:w-fit  w-[70%] flex-col gap-5 top-0 text-sm md:static absolute transition-all duration-150 md:h-fit h-screen md:bg-transparent md:font-bold font-normal bg-primary-color z-50 md:pl-0 px-4 md:pt-0 md:shadow-none shadow-xl select-none
               ${sidebar ? "left-[0]" : "left-[-100%]"}`}
          >
            <ul className="flex flex-row justify-between md:hidden items-center w-full ">
              <li>
                {" "}
                <div className="w-fit h-[90px] md:hidden mt-4 overflow-hidden flex justify-center items-center">
                  <img
                    src={Logo}
                    className="md:w-full w-[60px] cursor-pointer md:h-full h-[60px] object-cover drop-shadow-lg"
                    alt="Blisco"
                  />
                </div>
              </li>
            </ul>
            <li
              onClick={toggleSidebar}
              className="hover:text-primary-color px-2 py-1 md:mt-0 mt-4 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-primary-color flex-col flex gap-5 px-2 py-1 rounded-sm transition-all duration-150  md:text-black text-white text-lg md:text-sm">
              <div className="flex flex-row gap-3 justify-between items-center duration-150 transition-all">
                <Link onClick={toggleSidebar} to="/about">
                  About Us
                </Link>
                <IoIosArrowDown size={20} onClick={toggleDropdown} />
              </div>
              <span
                className={`flex shadow-md absolute top-[90px] bg-[#fbf9ff] py-2 transition-all duration-150 md:p-3 md:py-7 pl-5 ${
                  dropDown ? "flex" : "hidden"
                } `}
              >
                <Link to="/">Social Responsibility</Link>
              </span>
            </li>

            <li
              onClick={toggleSidebar}
              className="hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/product">Our Products</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/career">Career</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:text-primary-color md:hidden flex px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/">Become a Distributor</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div onClick={toggleSidebar} className="text-2xl md:hidden flex">
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
};
