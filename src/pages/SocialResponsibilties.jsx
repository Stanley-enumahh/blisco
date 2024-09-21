import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";

export default function Responsibility() {
  return (
    <div className="w-full flex-col flex h-fit font-ralewaay bg-[#fbf9ff]">
      <Navbar />
      <div className="md:mt-[130px] mt-[140px] w-full flex-col flex items-center">
        <div className=" w-[90%] flex flex-col gap-6 mb-8">
          <div className="flex flex-col gap-4 h-[100px] md:h-[200px]">
            <p className="text-red-600 font-semibold">responsibility/</p>
            <h1 className="text-2xl md:text-4xl font-bold">
              SOCIAL RESPONSIBILITY
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between h-fit md:h-[200px]">
            <div className="h-full w-full md:w-[50%] flex flex-col md:flex-row gap-2 md:items-center bg-[#ebebeb] rounded p-4">
              <h1 className="text-lg md:text-2xl font-bold">
                CO-OPERATE SOCIAL RESPONSIBILITY
              </h1>
              <p className="h-[2px] w-[60px] md:w-[100px] bg-red-600"></p>
            </div>
            <div className="h-full w-full md:w-[50%] flex justify-center items-center bg-[#131b23] text-neutral-200 p-4 rounded">
              <p className="text-justify">
                We love & value our local community. We work with the people to
                empower & encourage them towards progress. We give back to our
                community by supporting Community projects, we also sponsor
                students education and we carry out youth empowerment programs
                and other charity works
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 justify-between h-fit md:h-[200px]">
            <div className="h-full w-full md:w-[50%] flex justify-center items-center bg-[#131b23] text-neutral-200 p-4 rounded">
              <p className="text-justify">
                We love the environment and will continue to maintain our work
                to keep a clean environment & protect the resources that we are
                dependent on.
              </p>
            </div>
            <div className="h-full w-full md:w-[50%] flex flex-col md:flex-row-reverse gap-2 md:items-center bg-[#ebebeb] rounded p-4">
              <h1 className="text-lg md:text-2xl font-bold">
                ENVIRONMENTAL RESPONSIBILITY
              </h1>
              <p className="h-[2px] w-[60px] md:w-[100px] bg-red-600"></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between h-fit md:h-[200px]">
            <div className="h-full w-full md:w-[50%] flex flex-col md:flex-row gap-2 md:items-center bg-[#ebebeb] rounded p-4">
              <h1 className="text-lg md:text-2xl font-bold">
                STAKE HOLDER ENGAGEMENT
              </h1>
              <p className="h-[2px] w-[100px] bg-red-600"></p>
            </div>
            <div className="h-full w-full md:w-[50%] flex justify-center items-center bg-[#131b23] text-neutral-200 p-4 rounded">
              <p className="text-justify">
                We take our customers, staff and suppliers, seriously, because
                the actions we take as a company impacts on our stakeholders. We
                make it a priority to create job opportunities in our company
                that will improve the lives of people in our community
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
