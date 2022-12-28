import { FaHeart } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import productData from "../data/ProductData";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const data = productData.filter((product) => {
    return product.id == id;
  });
  const [targetData, setTargetData] = useState(data[0]);

  return (
    <div className="product-detail container px-10 mx-auto ">
      <div className="product-card flex flex-col my-10 md:flex-row ">
        <div className="product-img w-full md:border-[1px] md:border-black md:m-0">
          <img className="md:hidden" src={targetData.img} alt="" />
          <div
            style={{ backgroundImage: `url(${targetData.img})` }}
            className="hidden md:block md:h-full md:bg-center md:bg-no-repeat md:bg-contain"
          ></div>
        </div>
        <div className="details flex flex-col md:border-[1px] md:border-l-0 md:border-black md:m-0">
          <div className="flex mt-5 justify-between mb-5  md:m-0 md:px-5 md:py-10">
            <h6 className="uppercase md:text-3xl">{targetData.name}</h6>
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
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="flex space-x-5">
              <buttton className="bg-blue-500 text-white rounded-md px-10 py-3 cursor-pointer">
                Add to cart
              </buttton>
              <button className="p-3 border-black border-[1px] rounded-md">
                <FaHeart></FaHeart>
              </button>
            </div>
            <div className="w-full my-10"></div>
          </div>
          <Accordion>
            <AccordionSummary
              className="text-lg"
              expandIcon={<SlArrowDown></SlArrowDown>}
            >
              Description
            </AccordionSummary>
            <AccordionDetails>{targetData.description}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              className="text-lg"
              expandIcon={<SlArrowDown></SlArrowDown>}
            >
              Listing
            </AccordionSummary>
            <AccordionDetails>{targetData.listing}</AccordionDetails>
          </Accordion>
          <Accordion>
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
    </div>
  );
};

export default ProductDetail;
