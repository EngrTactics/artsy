const Product = ({ title, img, price }) => {
  return (
    <div className="product mb-10 bg-white md:shadow-xl md:p-3 md:rounded-2xl">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-[357px] max-h-[348px] bg-cover bg-center md:w-[300px] h-[348px] md:rounded-2xl"
      ></div>
      <div className="flex mt-5 justify-between md:flex-col md:space-y-5">
        <h6 className="uppercase">{title}</h6>
        <h6 className="md:text-2xl font-bold">${price}</h6>
      </div>
    </div>
  );
};

export default Product;
