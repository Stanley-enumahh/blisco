import { BsCake2Fill } from "react-icons/bs";
import { FaSmileWink } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";

export const Hero2 = () => {
  return (
    <div className="h-fit w-full flex flex-col items-center justify-center">
      <div className="flex w-[90%] md:w-[80%] justify-center flex-col md:flex-row gap-7 mb-[80px]">
        <div className="w-full md:w-[280px] cursor-pointer h-[200px] p-4 flex-col text-center bg-primary-color flex justify-center items-center gap-4 rounded-md">
          <BsCake2Fill size={30} />
          <h1 className="font-semibold">WE KEEP THE TRADITIONS OF BAKING</h1>
          <p className="lowercase text-sm">
            BAKED TO BE SAVOURED, MADE TO BE SHARED
          </p>
        </div>
        <div className="w-full md:w-[280px] cursor-pointer h-[200px] p-4 flex-col text-center bg-primary-color flex justify-center items-center gap-7 rounded-md">
          <FaSmileWink size={30} />
          <h1 className="font-semibold">LEAVES YOU SATISFIED AND SMILING</h1>
          <p className="lowercase text-sm">A BETTER WAY TO START YOUR DAY</p>
        </div>
        <div className="w-full md:w-[280px] cursor-pointer h-[200px] p-4 flex-col text-center bg-primary-color flex justify-center items-center gap-7 rounded-md">
          <MdShoppingBasket size={30} />
          <h1 className="font-semibold">BAKED WITH PASSION AND CARE</h1>
          <p className="lowercase text-sm">CREATING MEMORABLE EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};
