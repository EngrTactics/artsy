import { FaSearch, FaShoppingCart, FaRegBell, FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" w-full container mx-auto p-6">
      {/* flex container */}
      <div className="flex item-center justify-between">
        {/* Hamburgar icon */}
        <div className="flex items-center md:hidden">
          <FaBars></FaBars>
        </div>
        {/* logo */}
        <div className="text-2xl font-serif font-stix md:static">ARTSY.</div>
        {/* menu items */}
        <div className="hidden space-x-6 md:flex">
          <a href="#">Home</a>
          <a href="#">Marketplace</a>
          <a href="#">Auctions</a>
          <a href="#">Drop</a>
        </div>
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
