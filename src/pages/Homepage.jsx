import { Navbar } from "../components/Navbar";
import { Hero1 } from "../components/Hero1";
// import { Hero2 } from "../components/Hero2";
import { Footer } from "../components/footer";
import ScrollToTop from "../components/Navbar";
import { HeroAbout } from "../components/HeroAbout";
import MiniProduct from "../components/Hero1";

export default function Homepage() {
  return (
    <>
      <ScrollToTop />
      <div className=" flex flex-col h-fit w-full font-ralewaay">
        <Navbar />
        <Hero1 />
        <HeroAbout />
        {/* <Hero2 /> */}
        <MiniProduct />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}
