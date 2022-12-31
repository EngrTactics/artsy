import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import avatar5 from "../images/avatar5.png";
import PrimaryButton from "./PrimaryButton";

const FeaturedProduct = ({ url, title, description }) => {
  return (
    <div className="my-5 mx-10 flex flex-col md:border-t-2 md:border-black-500  md:flex-row md:even:flex-row-reverse md:pt-10 md:pb-6 md:justify-between">
      <div className="left flex md:w-1/2 md:mr-10">
        <div
          className="featured-img relative  h-[240px] w-[368px] bg-gray-700 bg-blend-overlay bg-center text-white text-center pt-10 text-4xl font-clash md:bg-transparent"
          style={{ backgroundImage: `url(${url}) ` }}
        >
          <h1 className="md:hidden">{title}</h1>
          <PrimaryButton custom="absolute bottom-5 right-12 text-white md:hidden" />
        </div>
      </div>
      <div className="right flex flex-col justify-between w-11/12  md:w-1/2 ">
        <h1 className="hidden md:block text-4xl font-clash">{title}</h1>
        <p className="py-5 break-words">{description}</p>
        <div className="flex items-center w-full pb-5 border-b-[1px] border-gray-700  md:border-none md:w-10/12 md:justify-between">
          <div className="avatar flex w-1/2 h-10 items-center -space-x-5 md:w-1/3">
            <img className="h-full" src={avatar1} alt="" />
            <img className="h-full" src={avatar2} alt="" />
            <img className="h-full" src={avatar3} alt="" />
            <img className="h-full" src={avatar4} alt="" />
            <img className="h-full" src={avatar5} alt="" />
          </div>
          <div className="h3">64 Major Creators</div>
          <PrimaryButton custom="hidden md:inline-block"></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
