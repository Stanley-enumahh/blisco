import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Popover } from "antd";

export const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const toggleSidebar = () => {
    setsidebar(!sidebar);
  };

  return (
    <div className="flex w-full h-fit justify-center py-2 z-50 bg-[#fbf9ff] fixed font-ralewaay">
      <div className="w-[90%] lg:w-[85%] h-fit flex flex-row justify-between items-center">
        <div className="w-fit h-[70px] p-2 overflow-hidden flex justify-center items-center">
          <img
            src={Logo}
            className="md:w-full w-[50px] cursor-pointer md:h-full h-[50px] object-cover drop-shadow-lg"
            alt="Blisco"
          />
        </div>
        <nav className="flex z-50">
          <ul
            className={`flex md:flex-row md:w-fit w-[70%] flex-col md:gap-3 gap-4 top-0 text-sm md:static absolute transition-all duration-500 md:h-fit h-screen md:bg-transparent md:font-bold font-normal bg-primary-color z-50 lg:pl-20 md:pl-0 px-4 md:pt-0 md:shadow-none shadow-xl select-none
               ${sidebar ? "left-[0] " : "left-[-100%]"}`}
          >
            <ul className="flex flex-row justify-between md:hidden items-center w-full ">
              <li>
                {" "}
                <div className="w-fit h-[90px] md:hidden mt-4 overflow-hidden flex justify-center items-center">
                  <img
                    src={Logo}
                    className="md:w-full w-[60px] cursor-pointer md:h-full h-[60px] object-cover drop-shadow-lg md:flex"
                    alt="Blisco"
                  />
                </div>
              </li>
            </ul>
            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 md:mt-0 mt-4 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:flex"
            >
              <Link to="/">Home</Link>
            </li>

            <li className="md:hover:text-primary-color flex-col flex gap-5 px-2 py-1 rounded-sm transition-all duration-150  md:text-black text-white text-lg md:text-sm md:flex text-nowrap">
              <Link onClick={toggleSidebar} to="/about">
                About Us
              </Link>
            </li>

            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:flex text-nowrap"
            >
              <Link to="/product">Our Products</Link>
            </li>

            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:flex hidden text-nowrap"
            >
              <Popover content={content} placement="bottom" title="">
                <Link to="/career">Career</Link>
              </Popover>
            </li>
            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:hidden flex text-nowrap"
            >
              <Link to="/career">Career</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:flex text-nowrap"
            >
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:hidden flex text-nowrap"
            >
              <Link to="/distributor">Become a distributor</Link>
            </li>
            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:hidden flex text-nowrap"
            >
              <Link to="/responsibility">Social responsibility</Link>
            </li>

            <li
              onClick={toggleSidebar}
              className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:flex text-nowrap"
            >
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <div onClick={toggleSidebar} className=" text-2xl md:hidden flex">
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]);

  return null;
};

export default ScrollToTop;

const content = (
  <div className="flex flex-col gap-2 ">
    <li className="md:hover:text-primary-color px-2 py-1 rounded-sm transition-all duration-150 md:text-black text-white text-lg md:text-sm md:flex text-nowrap">
      <Link to="/responsibility">Social responsibility</Link>
    </li>
    <li className="md:hover:text-primary-color px-2 py-1 transition-all duration-150 md:text-black text-white text-lg md:text-sm text-nowrap">
      <Link to="/distributor">Become a distributor</Link>
    </li>
  </div>
);
