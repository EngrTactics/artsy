import FeaturedProducts from "./FeaturedProductList";

const Featured = () => {
  return (
    <section id="featured">
      <div className="mx-auto container md:px-5 md:my-5 md:mx-auto">
        <h1 className="text-3xl ml-10 md:text-3xl md:mt-32">
          Featured Products
        </h1>

        <FeaturedProducts></FeaturedProducts>
      </div>
    </section>
  );
};

export default Featured;
