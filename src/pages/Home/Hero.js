import HeroImages from "./HeroImage";

const Hero = () => {
  return (
    // Hero Section
    <section id="Hero">
      {/* Hero Texts */}
      <div className="container mx-auto px-5 md:px-24">
        <h1 className="leading-relaxed text-2xl text-center font-clash md:text-6xl md:leading-[5rem]">
          Photography is poetry and beautiful untold stories
        </h1>
        <p className="text-center leading-6 text-md mt-4 font-satoshi md:px-10">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      {/* Hero images */}
      <HeroImages></HeroImages>
    </section>
  );
};

export default Hero;
