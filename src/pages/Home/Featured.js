import FeaturedProductList from "./FeaturedProductList";

const Featured = () => {
  return (
    // Feautured Seection
    <section id="featured">
      <div className="mx-auto container md:px-5 md:my-5">
        {/* Title */}
        <h1 className="text-3xl ml-10 md:text-3xl md:mt-32">
          Featured Products
        </h1>
        {/* Featured Product List */}
        <FeaturedProductList></FeaturedProductList>
      </div>
    </section>
  );
};

export default Featured;
