import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartCard = ({ data }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex justify-between py-5 md:border-b-gray-300 md:border-b-[1px]">
      <div className="flex space-x-5">
        <div
          style={{ backgroundImage: `url(${data.img})` }}
          className="rounded-md min-w-[8rem]  min-h-[8rem] bg-cover bg-center md:min-w-[16rem] md:min-h-[16rem]"
        ></div>
        <div className="flex flex-col items-start justify-between">
          <h1>{data.category}</h1>
          <h1>{data.title}</h1>
          <div className="flex space-x-3 text-3xl mb-3">
            <button>-</button>
            <span>{data.quantity}</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <AiOutlineClose
          className="cursor-pointer rounded-full border-black border-[1px] h-8 w-8 p-1"
          size={25}
          onClick={() => {
            removeFromCart(data.id);
          }}
        ></AiOutlineClose>
        <h1>${data.price}.00</h1>
      </div>
    </div>
  );
};

export default CartCard;
