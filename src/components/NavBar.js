import { useState } from "react";
import { FaSearch, FaShoppingCart, FaRegBell, FaBars } from "react-icons/fa";
import { MobileNavContext } from "../contexts/MobileNavContext";

import { Link, useLocation } from "react-router-dom";
import NavLinksMobile from "./NavLinksMobile";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const location = useLocation();

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
            className={`py-1 ${
              location.pathname === "/" ? "border-b-[1px] border-black" : null
            }`}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={`py-1 ${
              location.pathname === "/marketplace"
                ? "border-b-[1px] border-black"
                : null
            }`}
            to={"/marketplace"}
          >
            Marketplace
          </Link>
          <Link
            className={`py-1 ${
              location.pathname === "/auctions"
                ? "border-b-[1px] border-black"
                : null
            }`}
            to={"/auctions"}
          >
            Auctions
          </Link>
          <Link
            className={`py-1 ${
              location.pathname === "/drop"
                ? "border-b-[1px] border-black"
                : null
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
          <FaShoppingCart></FaShoppingCart>
          <FaRegBell className="hidden md:block"></FaRegBell>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
