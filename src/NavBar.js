import { useState } from "react";
import { FaSearch, FaShoppingCart, FaRegBell, FaBars } from "react-icons/fa";
import { MobileNavContext } from "./MobileNavContext";

import { Link } from "react-router-dom";
import NavLinksMobile from "./NavLinksMobile";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <nav className=" w-full container mx-auto p-6">
      {/* flex container */}
      <div className="flex item-center justify-between relative">
        {/* Hamburgar icon */}
        <div onClick={handleClick} className="flex items-center md:hidden">
          <FaBars></FaBars>
        </div>
        {/* logo */}
        <div className="text-2xl font-serif font-stix md:static">ARTSY.</div>
        {/* menu items */}
        <div className="hidden space-x-6 md:flex">
          <Link to={"/"}>Home</Link>
          <Link to={"/marketplace"}>Marketplace</Link>
          <Link to={"/auctions"}>Auctions</Link>
          <Link to={"/drop"}>Drop</Link>
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
