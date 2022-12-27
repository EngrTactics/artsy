import girl from "./images/girl.jpg";

const Product = ({ title, img, price }) => {
  return (
    <div className="product mb-10">
      <div className="w-[357px] max-h-[348px] overflow-hidden md:w-[300px]">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="flex mt-5 justify-between">
        <h6 className="uppercase">{title}</h6>
        <h6>${price}</h6>
      </div>
    </div>
  );
};

export default Product;
