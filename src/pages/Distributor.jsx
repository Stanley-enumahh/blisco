import { Navbar } from "../components/Navbar";

export default function Distributor() {
  return (
    <div className="w-full h-fit flex flex-col bg-[#f6f9ff]">
      <Navbar />
      <div className="mt-[130px]  flex flex-col justify-center  items-center gap-6 mb-8 md:mb-12">
        <div className="w-[90%]">
          <div className="flex flex-col gap-4 h-[100px] md:h-[200px]">
            <p className="text-red-600 font-semibold">Distribution/</p>
            <h1 className="text-2xl md:text-4xl font-bold">
              APPLICATION PROCESS
            </h1>
          </div>
        </div>

        <div className="w-[90%] flex flex-row">
          <div className="w-[40%] flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <h className="text-2xl font-bold">Application process</h>
              <p className="h-[2px] w-[60px] bg-red-600"></p>
            </div>
            <p className="font-semibold text-gray-600">
              Apply to become one of our distributors
            </p>
          </div>
          <div className="w-[55%] rounded py-10 px-5 flex bg-secondaryColor text-neutral-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            libero eius tempora unde, voluptatum commodi doloribus quidem
            tempore explicabo, aut fugiat blanditiis maiores iusto.
          </div>
        </div>
      </div>
    </div>
  );
}
