import { FaHeart } from "react-icons/fa";
import leaf from "../images/leaf.jpg";

const TopBid = () => {
  return (
    <div className="flex flex-col w-full h-[29rem] space-y-5 md:h-[32rem] ">
      <div className="flex flex-col items-end px-5 py-2 rounded-xl w-full h-full space-y-3 shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]">
        <FaHeart></FaHeart>
        <div
          style={{ backgroundImage: `url(${leaf})` }}
          className="rounded-xl w-full h-4/5 bg-cover bg-center"
        />
        <div className="w-full flex justify-between text-xl">
          <h1 className="font-bold">Out of the Box</h1>
          <h1 className="uppercase">0.57 eth</h1>
        </div>
      </div>
      <h2 className="pl-5">
        Creator: <span>Jacob Banks</span>
      </h2>
      <h2 className="pl-5">
        Date: <span>12/08/22</span>
      </h2>
      <div className="flex px-5 py-2 justify-between bg-gray-200 rounded-xl w-full items-center">
        <div className="flex flex-col space-y-5">
          <h2>Current bid</h2>
          <h2 className="uppercase">0.987 eth</h2>
        </div>
        <button className="px-10 py-3 bg-blue-600 w-auto rounded-md">
          Place bid
        </button>
      </div>
    </div>
  );
};

export default TopBid;
