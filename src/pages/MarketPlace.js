import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import FilterPanel from "../components/FilterPanel";
import Footer from "../components/Footer";
import Product from "../components/Product";
import productData from "../data/ProductData";
import { FilterContext } from "../contexts/FilterContext";

import { FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

const MarketPlace = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [renProductData, setRenProductData] = useState(productData);
  const [selectedValue, setSelectedValue] = useState();
  const [selectedSortValue, setSelectedSortValue] = useState();

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsSortOpen(false);
  };

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
    setIsFilterOpen(false);
  };

  const filterProduct = (e, filterValue) => {
    if (e.target.checked) {
      setRenProductData(
        productData.filter((product) =>
          product.type.toLowerCase().includes(filterValue)
        )
      );
      setSelectedValue(e.target.value);
    } else {
      setRenProductData(productData);
      setSelectedValue(e.target.value);
    }
  };

  const context = {
    isFilterOpen,
    setIsFilterOpen,
    selectedValue,
    setSelectedValue,
    filterProduct,
  };

  const sortProduct = (e, sortValue) => {
    if (e.target.checked) {
      setRenProductData(
        renProductData.sort((a, b) => {
          console.log(a[sortValue]);
          if (a[sortValue] < b[sortValue]) {
            return -1;
          }
          if (a[sortValue] > b[sortValue]) {
            return 1;
          }
          return 0;
        })
      );
      setSelectedSortValue(e.target.value);
    } else {
      setRenProductData(productData);
      setSelectedSortValue(e.target.value);
    }
  };
  return (
    <div className="products">
      <div className=" w-full px-5 m-auto md:m-0 md:p-10">
        {/* upper part: basically contains the filter and sort bar  */}
        <div className="flex mx-auto">
          {/* empty class to acheive some responsiveness */}
          <div className="hidden md:block md:w-1/6 md:space-x-6"></div>
          {/* filter and sort bar */}
          <div className="flex py-3 px-5 justify-between rounded-md shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] w-full mb-10 md:w-1/2 md:mx-auto">
            {/* filter button and dropdown */}
            <div className="relative">
              {/* filter button */}
              <button
                onClick={toggleFilter}
                className="relative filter flex items-center space-x-2 md:hidden"
              >
                <h6>Filter</h6>
                <SlArrowDown className="w-3 h-3"></SlArrowDown>
              </button>
              {/* filter bar:show on mobile only */}
              <div
                className={`${
                  isFilterOpen ? "" : "hidden"
                } absolute top-10 -left-5 flex flex-col py-5 px-3 space-y-5 min-w-max bg-white shadow-2xl rounded-xl`}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        filterProduct(e, "editorial");
                      }}
                      value="editorial"
                      checked={selectedValue === "editorial"}
                    />
                  }
                  label="Editorials"
                ></FormControlLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        filterProduct(e, "fashion");
                      }}
                      value="fashion"
                      checked={selectedValue === "fashion"}
                    />
                  }
                  label="Fashion"
                ></FormControlLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        filterProduct(e, "optics");
                      }}
                      value="optics"
                      checked={selectedValue === "optics"}
                    />
                  }
                  label="Optics"
                ></FormControlLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        filterProduct(e, "art");
                      }}
                      value="art"
                      checked={selectedValue === "art"}
                    />
                  }
                  label="Art & Museum"
                ></FormControlLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        filterProduct(e, "nature");
                      }}
                      value="nature"
                      checked={selectedValue === "nature"}
                    />
                  }
                  label="Nature"
                ></FormControlLabel>
              </div>
            </div>
            {/* sort button and dropdown */}
            <div className="relative">
              {/* flex button */}
              <button
                onClick={toggleSort}
                className="sort flex items-center space-x-2 md:border-2 md:border-black md:px-4 md:py-1 rounded-md"
              >
                <h6>Sort</h6>
                <SlArrowDown className="w-3 h-3"></SlArrowDown>
              </button>
              {/* sort bar */}
              {isSortOpen && (
                <div className="absolute top-10 -right-5 flex flex-col py-5 px-3 space-y-5 min-w-max bg-white shadow-2xl rounded-xl">
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => {
                          sortProduct(e, "name");
                        }}
                        value="name"
                        checked={selectedSortValue === "name"}
                      />
                    }
                    label="Name"
                  ></FormControlLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => {
                          sortProduct(e, "price");
                        }}
                        value="price"
                        checked={selectedSortValue === "price"}
                      />
                    }
                    label="Price"
                  ></FormControlLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => {
                          sortProduct(e, "creator");
                        }}
                        value="creator"
                        checked={selectedSortValue === "creator"}
                      />
                    }
                    label="Creator"
                  ></FormControlLabel>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* filterPanel and product display */}
        <div className="flex justify-center md:justify-start md:w-full md:space-x-6">
          {/* filter panel: show only on desktop */}
          <FilterContext.Provider value={context}>
            <FilterPanel></FilterPanel>
          </FilterContext.Provider>
          {/* products display */}
          <div className="right flex flex-col justify-center items-center md:w-5/6 md:flex-row md:flex-wrap md:justify-around md:items-baseline md:mx-auto">
            {renProductData.map((product) => (
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
