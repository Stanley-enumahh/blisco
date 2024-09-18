import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export default function Career() {
  return (
    <div className="w-full flex justify-center">
      <Navbar />
      <div className="w-full flex justify-center gap-10 items-center flex-col md:mt-[170px] mt-[130px]">
        <div className="md:w-[80%] w-[90%] md:text-start text-center justify-center items-center flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">
              Join Our Team At{" "}
              <span className="text-primary-color">BliscoFoods</span>{" "}
            </h1>
            <p>
              Join our team by submitting your resume and we will get in touch
              with you
            </p>
          </div>
          <div className="w-full md:w-[60%] flex flex-col gap-3">
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="name"
                className="outline-none border border-black px-3 py-2 bg-transparent w-[250px] md:w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="tel">Phone number:</label>
              <input
                type="tel"
                name=""
                id="tel"
                placeholder="phone number"
                className="outline-none border border-black px-3 py-2 bg-transparent  w-[220px] md:w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="email"
                className="outline-none border border-black px-3 py-2 bg-transparent  w-[250px] md:w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="name">Comments:</label>
              <input
                type="text"
                name=""
                id="comment"
                placeholder="write a short note on your qualities"
                className="outline-none border border-black px-3 py-2 bg-transparent  w-[250px] md:w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="CV">CV:</label>
              <input
                type="file"
                name="Cv"
                id="Cv"
                className=" border-black px-3 py-2 bg-transparent w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="passport">Paasport photogragh:</label>
              <input
                type="file"
                name="Cv"
                id="passport"
                className=" border-black px-3 py-2 bg-transparent w-[400px]"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="passport">ID CARD:</label>
              <input
                type="file"
                name="Cv"
                id="ID"
                className=" border-black px-3 py-2 bg-transparent w-[400px]"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
