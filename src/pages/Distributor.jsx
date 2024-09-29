import { Navbar } from "../components/Navbar";

export default function Distributor() {
  return (
    <div className="w-full h-fit flex flex-col bg-[#f6f9ff]">
      <Navbar />
      <div className="mt-[100px]  flex flex-col justify-center  items-center gap-6 mb-8 md:mb-12">
        <div className="w-[90%]">
          <div
            className="flex bg-primary-color items-center
           h-[100px] md:h-[200px] justify-center rounded-lg shadow-lg"
          >
            <h1 className="text-2xl md:text-4xl font-bold">
              APPLICATION PROCESS
            </h1>
          </div>
        </div>

        <div className="w-[90%] flex flex-col md:gap-0 gap-4 md:flex-row">
          <div className="w-full justify-center items-center md:w-[40%] flex flex-col gap-2 mb-3">
            <p className="font-semibold text-gray-600">
              Apply to become one of our distributors
            </p>
            <p className="h-[2px] w-[60px] bg-red-600"></p>
          </div>
          <div className="w-full md:w-[55%] rounded py-10 px-5 flex bg-secondaryColor text-neutral-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            libero eius tempora unde, voluptatum commodi doloribus quidem
            tempore explicabo, aut fugiat blanditiis maiores iusto.
          </div>
        </div>
      </div>
    </div>
  );
}
