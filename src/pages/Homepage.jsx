import { Navbar } from "../components/Navbar";
import { Hero1 } from "../components/Hero1";
import { Hero2 } from "../components/Hero2";
import { Footer } from "../components/footer";

export default function Homepage() {
  return (
    <>
      <div className=" flex flex-col h-fit w-full font-ralewaay">
        <Navbar />
        <Hero1 />
        <Hero2 />
        <Footer />
      </div>
    </>
  );
}
