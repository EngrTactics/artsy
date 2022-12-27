import { FaEnvelope, FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex px-5 my-10 md:justify-evenly md:items-center md:h-32">
      <div className="text-2xl font-serif font-stix hidden md:inline-block md:items-center">
        ARTSY.
      </div>

      <ul className="link hidden md:h-full md:flex md:flex-col md:justify-between">
        <li>Home</li>
        <li>Marketplace</li>
        <li>Auctions</li>
        <li>Drops</li>
      </ul>

      <ul className="link hidden md:flex md:h-full md:flex-col md:justify-between">
        <li>Blog</li>
        <li>Wallets</li>
        <li>Rates</li>
        <li>High Bids</li>
      </ul>

      <div className="contact md:h-full">
        <h2 className="mb-5 text-lg md:hidden uppercase ">Reach Us</h2>
        <ul>
          <li className="flex items-center mb-5">
            <FaEnvelope className="mr-4 w-5 h-5"></FaEnvelope>
            <span>artsystudio@gmail.com</span>
          </li>
          <li className="flex items-center">
            <FaLocationArrow className="mr-4 w-5 h-5"></FaLocationArrow>
            <span>Lagos, Nigeria</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
