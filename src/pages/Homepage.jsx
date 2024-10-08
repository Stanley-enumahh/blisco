import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import ScrollToTop from "../components/Navbar";
import { HeroAbout } from "../components/HeroAbout";
import MiniProduct from "../components/Miniproducts";
import { Newproduct } from "../components/Newproducts";
import { Homeslider } from "../components/Homeslider";
import Hero1 from "../components/Hero1";
import whatsAppicon from "../assets/2044px-WhatsApp.svg.png";

export default function Homepage() {
  return (
    <div className="w-full overflow-hidden flex flex-col overflow-hidden">
      <ScrollToTop />
      <div className=" flex flex-col h-fit w-full font-ralewaay">
        <Navbar />
        <Hero1 />
        <Homeslider />
        <HeroAbout />
        <Newproduct />
        <MiniProduct />
        <Footer />
        <WhatsApp />
      </div>
      <ScrollToTop />
    </div>
  );
}

export const WhatsApp = () => {
  return (
    <button className="fixed right-5 md:right-10 bottom-7 md:w-16 shadow-xl w-12 z-50 rounded-full">
      <a href="https://wa.me/+2347031058606">
        <img src={whatsAppicon} alt="" className="" />
      </a>
    </button>
  );
};
