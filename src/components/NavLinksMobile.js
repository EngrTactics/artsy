import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { MobileNavContext } from "../contexts/MobileNavContext";
import { motion } from "framer-motion";

const NavLinksMobile = ({ open }) => {
  const { setIsOpen } = useContext(MobileNavContext);
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className=" flex-col absolute w-full h-[100vh] bg-white md:hidden z-[999]"
    >
      <div className="flex justify-between px-5 items-center w-full">
        <div className="text-2xl font-serif font-stix md:static">ARTSY.</div>
        <AiOutlineClose
          className="cursor-pointer"
          onClick={handleClick}
          size={25}
        ></AiOutlineClose>
      </div>
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
