import { FaHeart } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";
import productData from "../data/ProductData";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import ScrollSlider from "../components/ScrollSlider";
import { CartContext } from "../contexts/CartContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  // make the details be that of the Id in the url i.e the clicked product
  const data = productData.filter((product) => {
    return product.id == id;
  });

  const [targetData, setTargetData] = useState(data[0]);
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const { cartData, setCartData, addToCart, removeFromCart, isCartItem } =
    useContext(CartContext);

  const itemIsCart = isCartItem(targetData.id);

  const handleAddToCart = () => {
    if (itemIsCart) {
      removeFromCart(targetData.id);
      console.log(cartData);
    } else {
      addToCart({
        id: targetData.id,
        title: targetData.name,
        category: targetData.type,
        img: targetData.img,
        price: targetData.price,
        quantity: quantity,
      });
      console.log(cartData);
    }
  };

  // Accordion handleChange to make sure only one is open a a time
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  const increaseQuantity = () => {
    var newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decreaseQuantity = () => {
    var newQuantity = quantity - 1;
    quantity > 1 ? setQuantity(newQuantity) : setQuantity(1);
  };

  return (
    <div className="product-detail container px-10 mx-auto ">
      {/* product card */}
      <div className="product-card flex flex-col my-10 md:flex-row ">
        {/* product img */}
        <div className="product-img w-full md:border-[1px] md:border-black md:m-0">
          <img className="md:hidden" src={targetData.img} alt="" />
          <div
            style={{ backgroundImage: `url(${targetData.img})` }}
            className="hidden md:block md:h-full md:bg-center md:bg-no-repeat md:bg-contain"
          ></div>
        </div>
        <div className="details flex flex-col md:border-[1px] md:border-l-0 md:border-black md:m-0">
          <div className="flex mt-5 justify-between mb-5  md:m-0 md:px-5 md:py-10">
            <h6 className="uppercase md:text-3xl md:font-bold">
              {targetData.name}
            </h6>
            <h6 className="md:text-3xl">${targetData.price}</h6>
          </div>
          <div className=" md:border-[1px] md:border-black md:border-x-0 md:m-0 md:px-5 md:py-10">
            <p className="mb-3 ">
              Creator :
              <span className="text-blue-500">{targetData.creator}</span>
            </p>
            <p className="mb-3">Made in {targetData.madeIn}</p>
            <p className="mb-3">Total views : {targetData.views} views</p>
            <div className="flex space-x-3 text-3xl mb-3">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div className="flex space-x-5">
              <button
                onClick={handleAddToCart}
                className="bg-[#3341C1] hover:bg-[#051076] text-white rounded-md px-10 py-3 cursor-pointer"
              >
                {itemIsCart ? "Remove from Cart" : "Add to Cart"}
              </button>
              <button className="p-2 border-black border-[1px] rounded-md">
                <Checkbox
                  checkedIcon={<AiFillHeart size={20}></AiFillHeart>}
                  icon={<AiOutlineHeart size={20}></AiOutlineHeart>}
                ></Checkbox>
              </button>
            </div>
            <div className="w-full my-10"></div>
          </div>
          <Accordion
            elevation={0}
            expanded={expanded === "panel1"}
            onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
          >
            <AccordionSummary
              className="text-lg"
              expandIcon={<SlArrowDown></SlArrowDown>}
            >
              Description
            </AccordionSummary>
            <AccordionDetails>{targetData.description}</AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            expanded={expanded === "panel2"}
            onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
          >
            <AccordionSummary
              className="text-lg"
              expandIcon={<SlArrowDown></SlArrowDown>}
            >
              Listing
            </AccordionSummary>
            <AccordionDetails>{targetData.listing}</AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            expanded={expanded === "panel3"}
            onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
          >
            <AccordionSummary
              className="text-lg"
              expandIcon={<SlArrowDown></SlArrowDown>}
            >
              Status
            </AccordionSummary>
            <AccordionDetails>{targetData.status}</AccordionDetails>
          </Accordion>
        </div>
      </div>
      <h1>More from this collection</h1>
      <Slider
        data={productData.filter((product) => {
          return product.type == targetData.type;
        })}
      ></Slider>
      <ScrollSlider>
        {productData.map((product) => {
          <div className="w-full h-[400px] p-5 flex-col border-black border-[1px] items-end ">
            <div className="flex w-full justify-end my-2">
              <FaHeart></FaHeart>
            </div>

            <div
              style={{ backgroundImage: `url(${product.img})` }}
              className="img-container w-full h-64 bg-cover bg-center"
            >
              <div className="flex justify-between h-full items-center"></div>
            </div>
            <div className="flex mt-5 justify-between mb-5 ">
              <h6 className="uppercase">{product.name}</h6>
              <h6>${product.price}</h6>
            </div>
          </div>;
        })}
      </ScrollSlider>
    </div>
  );
};

export default ProductDetail;
