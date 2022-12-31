import { useState, useContext } from "react";
import { FaSearch, FaShoppingCart, FaRegBell, FaBars } from "react-icons/fa";
import { MobileNavContext } from "../contexts/MobileNavContext";
import { Link, useLocation } from "react-router-dom";
import NavLinksMobile from "./NavLinksMobile";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "../contexts/CartContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const location = useLocation();
  const { cartData } = useContext(CartContext);

  return (
    <nav
      className={`${
        location.pathname === "/auctions/livebid" ? "hidden" : null
      } w-full container mx-auto p-5 relative`}
    >
      {/* flex container */}
      <div className="flex item-center justify-between relative">
        {/* Hamburgar icon */}
        <div onClick={handleClick} className="flex items-center md:hidden">
          <FaBars></FaBars>
        </div>
        {/* logo */}
        <div className="text-2xl font-serif font-stix md:static">ARTSY.</div>
        {/* menu items : in className, there is a check to see if we are currently on the page the link links to so that we ca set a border show active link  */}
        <div className="hidden space-x-6 md:flex">
          <Link
            className={`py-1 transition-all ${
              location.pathname === "/"
                ? "border-b-[1px] border-black "
                : "hover:border-b-[1px] border-gray-500 "
            }`}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={`py-1 transition-all ${
              location.pathname === "/marketplace"
                ? "border-b-[1px] border-black"
                : "hover:border-b-[1px] border-gray-500 "
            }`}
            to={"/marketplace"}
          >
            Marketplace
          </Link>
          <Link
            className={`py-1 transition-all ${
              location.pathname === "/auctions"
                ? "border-b-[1px] border-black"
                : "hover:border-b-[1px] border-gray-500 "
            }`}
            to={"/auctions"}
          >
            Auctions
          </Link>
          <Link
            className={`py-1 transition-all ${
              location.pathname === "/drop"
                ? "border-b-[1px] border-black"
                : "hover:border-b-[1px] border-gray-500 "
            }`}
            to={"/drop"}
          >
            Drop
          </Link>
        </div>
        <MobileNavContext.Provider value={{ isOpen, setIsOpen }}>
          {isOpen && <NavLinksMobile></NavLinksMobile>}
        </MobileNavContext.Provider>
        {/* menu icons */}
        <div className="flex space-x-6 items-center">
          <FaSearch></FaSearch>
          <Link className="relative" to={"/cart"}>
            {cartData.length !== 0 && (
              <div className="absolute -top-1 -right-1 w-3 h-3 text-white text-[6px] bg-red-500 text-center my-auto rounded-full">
                {cartData.length}
              </div>
            )}
            <MdOutlineShoppingCart size={20}></MdOutlineShoppingCart>
          </Link>
          <FaRegBell className="hidden md:block"></FaRegBell>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
