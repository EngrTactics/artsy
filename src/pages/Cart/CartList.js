import CartCard from "./CartCard";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartList = ({ custom, children }) => {
  const { cartData } = useContext(CartContext);
  const addAllPrices = (prices) => {
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
      totalPrice += prices[i].price;
    }
    return totalPrice;
  };
  return (
    <div className={`${custom} flex flex-col container px-5 space-y-5`}>
      {cartData.map((cartItem) => (
        <CartCard key={cartItem.id} data={cartItem}></CartCard>
      ))}
      <div className="flex h-30 flex-col-reverse items-center md:flex-row md:justify-between md:space-y-0">
        <div className="flex flex-col w-1/2 space-y-5 ">
          {children}
          <Link
            to="/marketplace"
            className="border-b-[1px] border-b-blue-500 text-blue-500"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="flex flex-col justify-between mb-5">
          <h1 className="flex justify-between space-x-5">
            <span>Products in cart:</span>
            <span>
              {cartData.length === 1
                ? `${cartData.length} item`
                : `${cartData.length} items`}
            </span>
          </h1>
          <h1 className="flex justify-between space-x-5">
            <span>Shipping:</span> <span>${2.5 * cartData.length}</span>
          </h1>
          <h1 className="flex justify-between space-x-5">
            <span>Total:</span> <span>${addAllPrices(cartData)}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartList;
