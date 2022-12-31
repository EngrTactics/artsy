import Flutterwave from "./Flutterwave";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Pay = () => {
  const { cartData } = useContext(CartContext);
  const addAllPrices = (prices) => {
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
      totalPrice += prices[i].price;
    }
    return totalPrice;
  };

  return (
    <div className="py-30">
      <Flutterwave amountx={addAllPrices(cartData)}></Flutterwave>
    </div>
  );
};

export default Pay;
