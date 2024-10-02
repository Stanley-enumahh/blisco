import { Navbar } from "../components/Navbar";

// import { Hero2 } from "../components/Hero2";
import { Footer } from "../components/footer";
import ScrollToTop from "../components/Navbar";
import { HeroAbout } from "../components/HeroAbout";
import MiniProduct from "../components/Miniproducts";
import { Newproduct } from "../components/Newproducts";
import { Homeslider } from "../components/Homeslider";
import Hero1 from "../components/Hero1";

export default function Homepage() {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <ScrollToTop />
      <div className=" flex flex-col h-fit w-full font-ralewaay">
        <Navbar />
        <Hero1 />
        <Homeslider />
        <HeroAbout />
        <Newproduct />
        <MiniProduct />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
