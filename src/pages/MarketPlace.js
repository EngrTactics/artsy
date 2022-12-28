import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import FilterPanel from "../components/FilterPanel";
import Footer from "../components/Footer";
import Product from "../components/Product";
import productData from "../data/ProductData";

const MarketPlace = () => {
  return (
    <div className="products">
      <div className=" w-full px-5 m-auto md:m-0 md:p-10">
        <div className="flex  py-3 px-5 justify-between rounded-md shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] w-full mb-10 md:w-1/2 md:mx-auto">
          <button className="filter flex items-center space-x-2">
            <h6>Filter</h6>
            <SlArrowDown className="w-3 h-3"></SlArrowDown>
          </button>
          <button className="sort flex items-center space-x-2">
            <h6>Sort</h6>
            <SlArrowDown className="w-3 h-3"></SlArrowDown>
          </button>
        </div>
        <div className="flex justify-center md:justify-start md:w-full md:space-x-10">
          <FilterPanel></FilterPanel>
          <div className="right flex flex-col justify-center items-center md:w-5/6 md:flex-row md:flex-wrap md:justify-around md:items-baseline md:mx-auto">
            {productData.map((product) => (
              <Link key={product.id} to={`/marketplace/${product.id}`}>
                <Product
                  title={product.name}
                  img={product.img}
                  price={product.price}
                ></Product>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MarketPlace;
