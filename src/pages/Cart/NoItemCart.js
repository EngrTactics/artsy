import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const NoItemCart = () => {
  return (
    <div className="mx-auto flex flex-col items-center h-full">
      <MdOutlineAddShoppingCart size={200}></MdOutlineAddShoppingCart>
      <h1 className="text-2xl">No Item In Cart</h1>
      <Link
        to="/marketplace"
        className="my-10 mx-auto bg-[#3341C1] hover:bg-[#051076] text-white rounded-md px-10 py-3 cursor-pointer"
      >
        Go to Shop
      </Link>
    </div>
  );
};

export default NoItemCart;
