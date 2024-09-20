import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import teamPix from "../assets/IMG_20231106_171355_128@765762521.jpg";

export default function Career() {
  return (
    <div className="w-full flex justify-center">
      <Navbar />
      <div className="w-full flex justify-center gap-10 items-center flex-col md:mt-[140px] mt-[130px]">
        <div className="md:w-full w-[90%] md:text-start text-center justify-center items-center flex flex-col gap-6 ">
          <div className="flex flex-col gap-4 md:gap-2 w-full">
            <img
              src={teamPix}
              className="h-[400px] w-full object-cover"
              alt=""
            />
            <h1 className="text-4xl font-bold">
              Join Our Team At{" "}
              <span className="text-primary-color">BliscoFoods</span>{" "}
            </h1>
            <p>
              Join our team by submitting your resume and we will get in touch
              with you
            </p>
          </div>
          <div className="w-full md:w-[60%] flex flex-col gap-5 md:gap-3">
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="name"
                className="outline-none border border-black px-3 py-2 bg-transparent w-[200px] md:w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="tel">Phone number:</label>
              <input
                type="tel"
                name=""
                id="tel"
                placeholder="phone number"
                className="outline-none border border-black px-3 py-2 bg-transparent  w-[180px] md:w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="email"
                className="outline-none border border-black px-3 py-2 bg-transparent  w-[200px] md:w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="name">Comments:</label>
              <input
                type="text"
                name=""
                id="comment"
                placeholder="write a short note on your qualities"
                className="outline-none border border-black px-3 py-2 bg-transparent  w-[200px] md:w-[400px]"
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
        </div>
        <Footer />
      </div>
    </div>
  );
}
