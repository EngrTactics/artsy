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
    <div className="relative">
      {/* Product being bidded: Image */}
      <div
        style={{ backgroundImage: `url(${girl})` }}
        className="p-5 w-full h-screen flex flex-col  bg-cover bg-center text-white justify-between items-center"
      >
        {/* Tag, views and close */}
        <div className="w-full flex justify-between items-center">
          <h1>Tag: Lost or Winter</h1>
          <div className="flex items-center justify-around w-1/2">
            <div className="bg-blue-500 px-3 py-2 uppercase rounded-md text-sm">
              Live
            </div>
            <div className=" flex items-center space-x-2 bg-gray-200 bg-opacity-50 justify-around px-3 py-2 uppercase rounded-md text-sm">
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
        <h1 className="text-3xl font-bold">Current Bid : $45.00</h1>

        {/* comment and Like section */}
        <div className="flex justify-between items-center space-x-5 w-full">
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
      </div>
    </div>
  );
};

export default LiveStream;
