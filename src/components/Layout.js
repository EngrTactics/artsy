import NavBar from "../components/NavBar";
import MarketPlace from "../pages/MarketPlace";
import Home from "../pages/Home";
import Auction from "../pages/Auction";
import Drops from "../pages/Drops";
import ProductDetail from "../pages/ProductDetail";
import LiveStream from "../pages/LiveStream";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/marketplace" element={<MarketPlace />}></Route>
          <Route path="/marketplace/:id" element={<ProductDetail />}></Route>
          <Route path="/auctions" element={<Auction />}></Route>
          <Route path="/auctions/livebid" element={<LiveStream />}></Route>
          <Route path="/drop" element={<Drops />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
