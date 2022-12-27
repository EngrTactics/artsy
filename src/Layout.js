import NavBar from "./NavBar";
import Products from "./Products";
import Home from "./Home";
import Auctions from "./Auctions";
import ProductDetail from "./ProductDetail";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/marketplace" element={<Products />}></Route>
          <Route path="/marketplace/:id" element={<ProductDetail />}></Route>
          <Route path="/auctions" element={<Auctions />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
