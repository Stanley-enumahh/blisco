export const Newsletter = () => {
  return (
    <div className=" md:px-[100px] px-5 py-7 md:w-full md:gap-0 gap-4 flex flex-col md:flex-row justify-between md:mb-0 mb-6">
      <div className="flex flex-col w-full md:w-[60%] text-white gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black ">
          Subscribe to Our Newsletter
        </h2>
        <p className="h-[2px] w-[100px] bg-red-600"></p>
        <p className="text-sm text-black">
          To stay up-to-date on all our Promotions and information and stories
          as they unfold, subscribe to our news service.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <div className="flex flex-row gap-1">
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            className=" outline-none px-3 py-1 bg-transparent text-black border-gray-500 border w-[250px]"
          />
          <button className=" bg-[#ebebeb] text-black px-2 py-2 w-full rounded  shadow-lg hover:bg-primary-color font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
