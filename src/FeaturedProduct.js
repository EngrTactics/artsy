import lady from "./images/lady.jpg";
import PrimaryButton from "./PrimaryButton";

const FeaturedProduct = () => {
  return (
    <div className="md:border-t-2 md:border-black-500 w-full">
      <div className="left flex">
        <div className="featured-img relative bg-[url(./images/lady.jpg)] h-[240px] w-[368px] bg-gray-600 bg-blend-overlay text-white text-center pt-10 text-4xl font-clash">
          <h1>Boolean Egyptian</h1>
          <PrimaryButton position="absolute bottom-5 right-12" />
        </div>
      </div>
      <div className="right flex flex-col md:flex-row md:even:flex-row-reverse">
        <p className="py-5 break-words">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          explicabo expedita esse odit labore consequuntur tenetur.
        </p>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
