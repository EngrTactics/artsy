import productData from "./ProductData";

const featuredProductData = productData.filter((product) => {
  return product.feautured;
});

export default featuredProductData;
