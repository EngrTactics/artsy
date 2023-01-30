import FeaturedProduct from "./FeaturedProduct";
import featuredProductData from "../../data/FeaturedProductsData";

const FeaturedProductList = () => {
  return (
    //List of Featured products fron Featured products data
    <div className="py-5">
      {featuredProductData.map((items) => (
        <FeaturedProduct
          key={items.id}
          description={items.description}
          title={items.name}
          url={items.img}
        ></FeaturedProduct>
      ))}
    </div>
  );
};

export default FeaturedProductList;
