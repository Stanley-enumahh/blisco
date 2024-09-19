import { Navbar } from "../components/Navbar";
import Teachocomilk from "../assets/blisco tea-choco.png";
import BliscoBreadCake from "../assets/blisco cake bread.png";

const Details = [
  {
    image: BliscoBreadCake,
    title: "BLISCO ECONOMY BREAD",
    info: "This is our Pocket Friendly Bread. It is rich in taste and Quality very soft and tasty",
    weight: "Net Weight is 1.2kg",
  },
  // {
  //   image: Teachocomilk,
  //   title: "TEA-CHOCO-MILK",
  //   info: "If you have unique taste for chocolate this product is for you.Blisco Tea-Choco-Milk Bread is a unique recipe for Lovers of Chocolate . It is made with 100% Chocolate, Cocoa Powder and Tea, and Milk. Every bite gives you that Chocolate experience. It is Soft, Fresh and Tasty. ",
  // },
];

export default function ProductsDisplay() {
  return (
    <div className="w-full h-fit flex justify-center">
      <Navbar />
      <div className="w-[70%] h-[430px] mt-[150px] flex flex-row">
        <div>
          {Details.map((Design, index) => {
            return <ProductDesign Data={Design} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export function ProductDesign(props) {
  const { image, title, info, weight } = props.Data;
  return (
    <div className="flex flex-row justify-between w-full items-center h-full bg-[#ebebeb] p-5 rounded-md shadow-lg gap-4">
      <div className="w-[45%] h-full flex flex-col justify-center gap-3">
        <p className="text-primary-color text-xs">{weight}</p>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p>{info}</p>
      </div>
      <div className="h-[440px] w-[60%] flex justify-center">
        <img src={image} className="h-full w-[75%] rotate-12 drop-shadow-lg" />
      </div>
    </div>
  );
}
