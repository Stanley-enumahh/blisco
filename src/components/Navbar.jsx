import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

export const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const toggleSidebar = () => {
    setsidebar(!sidebar);
    console.log(300);
  };
  return (
    <div className="flex w-full h-fit justify-center py-2 z-50 bg-[#ebebeb] fixed">
      <div className="w-[90%] h-fit flex flex-row justify-between items-center">
        <div className="w-fit h-[100px] p-2 overflow-hidden flex justify-center items-center">
          <img
            src={Logo}
            className="md:w-full w-[90px] cursor-pointer md:h-full h-[80px] object-cover drop-shadow-lg"
            alt="Blisco"
          />
        </div>
        <nav className="flex z-50">
          <ul
            className={`flex md:flex-row md:w-fit  w-full flex-col gap-5 top-0 text-sm md:static absolute transition-all duration-150 md:h-fit h-screen md:bg-transparent md:font-bold font-normal bg-primary-color z-50 md:pl-0 px-5 md:pt-0 md:shadow-none shadow-xl
               ${sidebar ? "left-[0]" : "left-[-100%]"}`}
          >
            <ul className="flex flex-row justify-between md:hidden items-center w-full ">
              <li>
                {" "}
                <div className="w-fit h-[90px] md:hidden mt-4 overflow-hidden flex justify-center items-center">
                  <img
                    src={Logo}
                    className="md:w-full w-[90px] cursor-pointer md:h-full h-[80px] object-cover drop-shadow-lg"
                    alt="Blisco"
                  />
                </div>
              </li>
              <li
                className="px-3 py-2 rounded-md bg-secondaryColor"
                onClick={toggleSidebar}
              >
                <FaXmark className="text-2xl text-white" />
              </li>
            </ul>
            <li
              onClick={toggleSidebar}
              className="hover:bg-[#f58634] px-2 py-1 md:mt-0 mt-4 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/">Home</Link>
            </li>

            <li
              onClick={toggleSidebar}
              className="hover:bg-[#f58634] px-2 py-1 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:bg-[#f58634] px-2 py-1 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/">Contact Us</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:bg-[#f58634] px-2 py-1 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/product">Our Products</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:bg-[#f58634] px-2 py-1 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/career">Career</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:bg-[#f58634] md:hidden flex px-2 py-1 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/">Become a Distributor</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="hover:bg-[#f58634] md:hidden flex px-2 py-1 rounded-sm transition-all duration-150 hover:text-white md:text-black text-white text-lg md:text-sm"
            >
              <Link to="/">Co-operate Social Responsibility</Link>
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
