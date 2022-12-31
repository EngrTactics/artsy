import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CartList from "../components/CartList";
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";

import ShippingDetails from "../components/ShippingDetails";
import "../react-tab-cart.css";

const Cart = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { cartData } = useContext(CartContext);
  // const checkout = useRef(null);
  // useEffect(() => {
  //   setTab(document.getElementById("tab"));
  //   console.log(tab);
  // }, []);
  const handleCheckout = () => {
    setTabIndex(1);
  };

  let content;
  if (cartData.length === 0) {
    content = <div>nothing here yet</div>;
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

  // const [checkOut, setCheckOut] = useState(null);
  // let checkout;
  // useEffect(() => {
  //   setCheckOut(document.getElementsByClassName("checkout"));
  //   checkout = checkOut.ToArray();
  // }, []);

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
        <ShippingDetails></ShippingDetails>
      </TabPanel>
      <TabPanel className="h-full rounded-md  ">Payment Details</TabPanel>
    </Tabs>
  );
};

export default Cart;
