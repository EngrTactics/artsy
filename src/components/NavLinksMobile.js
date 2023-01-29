import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { MobileNavContext } from "../contexts/MobileNavContext";
import { motion } from "framer-motion";

const NavLinksMobile = ({ open }) => {
  const { setIsOpen } = useContext(MobileNavContext);
  // On click of any navlink, close the navbar
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    // Nav link for mobile view, made a component coz it has animation that the large screen navbar has
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className=" p-5 flex-col fixed  top-0 left-0 w-screen h-screen bg-white md:hidden z-[999]"
    >
      {/* Logo + Close Button */}
      <div className="flex justify-between px-5 items-center w-full">
        {/* Logo */}
        <div className="text-2xl font-serif font-stix md:static">ARTSY.</div>
        {/* Close Button */}
        <AiOutlineClose
          className="cursor-pointer"
          onClick={handleClick}
          size={25}
        ></AiOutlineClose>
      </div>
      {/*Mobile Nav links */}
      <div
        onClick={handleClick}
        className="flex flex-col text-2xl space-y-10 pl-5 mt-10"
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/marketplace"}>Marketplace</Link>
        <Link to={"/auctions"}>Auctions</Link>
        <Link to={"/drop"}>Drop</Link>
      </div>
    </motion.div>
  );
};

export default NavLinksMobile;
