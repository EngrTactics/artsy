import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CartList from "./CartList";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useState } from "react";
import ShippingDetails from "./ShippingDetails";
import "./react-tab-cart.css";
import Pay from "./Pay";
import NoItemCart from "./NoItemCart";

const Cart = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { cartData } = useContext(CartContext);

  const handleCheckout = () => {
    setTabIndex(1);
  };
  const handleToPayment = () => {
    setTabIndex(2n);
  };

  let content;
  if (cartData.length === 0) {
    content = <NoItemCart />;
  } else {
    content = (
      <CartList>
        <button
          onClick={handleCheckout}
          className="mx-auto w-full bg-blue-600 text-white py-3"
        >
          Proceed to checkout
        </button>
      </CartList>
    );
  }

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => {
        setTabIndex(index);
      }}
      className="mx-auto container w-full text-center "
    >
      <TabList className="p-0 min-w-4/5 pb-0 m-5 flex justify-center">
        <Tab className="list-none text-sm py-2 px-5 cursor-pointer text-gray-400 border-b-gray-400 border-b-2">
          Shipping Cart
        </Tab>
        <Tab className="checkout list-none text-sm py-2 px-5 cursor-pointer text-gray-400 border-b-gray-400 border-b-2">
          Shipping Details
        </Tab>
        <Tab className="list-none text-sm py-2 px-5 cursor-pointer text-gray-400 border-b-gray-400 border-b-2">
          Payment Details
        </Tab>
      </TabList>
      <TabPanel className=" h-full rounded-md ">{content}</TabPanel>
      <TabPanel className="h-full rounded-md  ">
        <ShippingDetails handleToPayment={handleToPayment}></ShippingDetails>
      </TabPanel>
      <TabPanel className="h-full rounded-md  ">
        <Pay></Pay>
      </TabPanel>
    </Tabs>
  );
};

export default Cart;
