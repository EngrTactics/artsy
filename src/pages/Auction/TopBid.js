import { Checkbox } from "@mui/material";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const TopBid = ({ url, creator, name, highest, current, day, month, year }) => {
  return (
    <div className="flex flex-col w-full h-[29rem] space-y-5 md:h-[32rem] ">
      <div className="flex flex-col items-end px-5 py-2 rounded-xl w-full h-full space-y-3 shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]">
        <Checkbox
          checkedIcon={<AiFillHeart color="red" size={20}></AiFillHeart>}
          icon={<AiOutlineHeart color="red" size={20}></AiOutlineHeart>}
        ></Checkbox>
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="rounded-xl w-full h-4/5 bg-cover bg-center"
        />
        <div className="w-full flex justify-between text-xl">
          <h1 className="font-bold uppercase">{name}</h1>
          <h1 className="uppercase">{highest} eth</h1>
        </div>
      </div>
      <h2 className="pl-5">
        Creator: <span className="uppercase">{creator}</span>
      </h2>
      <h2 className="pl-5">
        Date:
        <span>
          {day}/{month}/{year}
        </span>
      </h2>
      <div className="flex px-5 py-2 justify-between bg-gray-200 rounded-xl w-full items-center">
        <div className="flex flex-col space-y-5">
          <h2>Current bid</h2>
          <h2 className="uppercase">{current} eth</h2>
        </div>
        <button className="px-10 py-3 bg-blue-600 w-auto rounded-md">
          Place bid
        </button>
      </div>
    </div>
  );
};

export default TopBid;
