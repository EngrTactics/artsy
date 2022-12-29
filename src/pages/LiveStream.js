import { FaEye, FaHeart } from "react-icons/fa";
import girl from "../images/girl.jpg";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LiveStream = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auctions");
  };
  return (
    <div className="relative mx-auto container md:p-10 md:flex ">
      {/* Product being bidded: Image */}
      <div
        style={{ backgroundImage: `url(${girl})` }}
        className="p-5 w-full min-w-[400px] h-screen flex flex-col  bg-cover bg-center text-white justify-between items-center md:items-start md:border-[1.5px] border-black"
      >
        {/* Tag, views and close */}
        <div className="w-full flex justify-between items-center">
          <h1 className="md:hidden">Tag: Lost or Winter</h1>
          <div className="flex items-center justify-around w-1/2 md:flex-row-reverse md:w-full md:justify-between">
            <div className="bg-blue-500 px-3 py-2 uppercase rounded-md text-sm">
              Live
            </div>
            <div className=" flex items-center space-x-2 bg-gray-200 bg-opacity-50 justify-around px-3 py-2 uppercase rounded-md text-sm md:hidden">
              <FaEye></FaEye>
              <h1>233</h1>
            </div>
            <AiOutlineClose
              className="cursor-pointer"
              size={25}
              onClick={handleClick}
            ></AiOutlineClose>
          </div>
        </div>
        {/* Current Bid */}
        <h1 className="text-3xl font-bold w-full text-center">
          Current Bid : $45.00
        </h1>
        {/* comment and Like section */}
        <div className="flex justify-between items-center space-x-5 w-full md:hidden">
          <form className=" w-full flex items-center border-white border-2 rounded-full px-5 py-3">
            <input
              type="text"
              className="bg-transparent w-full focus:border-none focus:outline-none"
            />
            <AiOutlineSend></AiOutlineSend>
          </form>
          {/* Love icon */}
          <FaHeart size={30}></FaHeart>
        </div>
        <h1 className="hidden md:block">Tag: Lost or Winter</h1>
      </div>
      {/* comment section for desktop view */}
      <div className=" hidden md:p-5 md:block md:justify-self-start md:border-y-[1.5px] border-black min-w-[400px] border-r-[1.5px]"></div>
    </div>
  );
};

export default LiveStream;
