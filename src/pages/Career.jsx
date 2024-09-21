import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import teamPix from "../assets/adeolu-eletu-E7RLgUjjazc-unsplash.jpg";

export default function Career() {
  return (
    <div className="w-full flex justify-center font-ralewaay">
      <Navbar />
      <div className="w-full flex justify-center gap-10 items-center flex-col md:mt-[80px] mt-[70px]">
        <div className="w-full md:text-start text-center justify-center items-center flex flex-col gap-6 ">
          <div className="flex flex-col gap-4 md:gap-2 w-full relative">
            <img
              src={teamPix}
              className="h-[400px] w-full object-cover"
              alt=""
            />
            <div className="absolute Career-pix w-full h-full flex flex-col justify-center gap-4 md:pl-[100px] text-white md:p-0 p-5">
              <h1 className="text-5xl font-bold">
                Join Our Team At{" "}
                <span className="text-primary-color">BliscoFoods</span>{" "}
              </h1>
              <p>
                Join our superb team by submitting the required details below
                and we will get in touch with you
              </p>
            </div>
          </div>
          <div className="w-[90%] md:w-[60%] pt-5 flex flex-col gap-5 md:gap-3">
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

          <button className=" px-8 py-2 rounded text-black shadow-lg bg-primary-color flex flex-row gap-2 justify-center items-center md:mb-0 mb-8 font-bold transition-all duration-150 hover:bg-[#ebebeb]">
            Submit
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
