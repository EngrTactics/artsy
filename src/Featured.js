import FeaturedProducts from "./FeaturedProducts";

const Featured = () => {
  return (
    <section id="featured">
      <div className="px-5 container md:mx-20 md:my-5">
        <h1 className="text-3xl md:text-3xl md:my-10 md:mt-32">
          Featured Products
        </h1>

        <FeaturedProducts></FeaturedProducts>
      </div>
    </section>
  );
};

export default Featured;
