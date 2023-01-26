import NavBar from "../components/NavBar";
import MarketPlace from "../pages/MarketPlace/MarketPlace";
import Home from "../pages/Home/Home";
import Auction from "../pages/Auction/Auction";
import Drops from "../pages/Drops/Drops";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import LiveStream from "../pages/LiveStream/LiveStream";
import Cart from "../pages/Cart/Cart";
import { CartContext } from "../contexts/CartContext";
import { useState, useEffect } from "react";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  const [cartData, setCartData] = useState([]);

  // function to add item to cart
  const addToCart = (productToAdd) => {
    setCartData((previousCartData) => {
      return previousCartData.concat(productToAdd);
    });
  };

  // function to remove item from cart
  const removeFromCart = (productId) => {
    setCartData((previousCartData) => {
      return previousCartData.filter((cartItem) => cartItem.id !== productId);
    });
  };

  // function to know if an item is in cart already
  const isCartItem = (productId) => {
    return cartData.some((product) => product.id === productId);
  };
  const context = {
    cartData,
    setCartData,
    addToCart,
    removeFromCart,
    isCartItem,
  };

  return (
    <div className="layout">
      <Router basename="/artsy">
        <CartContext.Provider value={context}>
          <NavBar></NavBar>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/marketplace" element={<MarketPlace />}></Route>
              <Route
                path="/marketplace/:id"
                element={<ProductDetail />}
              ></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/auctions" element={<Auction />}></Route>
              <Route path="/auctions/livebid" element={<LiveStream />}></Route>
              <Route path="/drop" element={<Drops />}></Route>
            </Routes>
          </ScrollToTop>
        </CartContext.Provider>
      </Router>
    </div>
  );
};

export default Layout;
