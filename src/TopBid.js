import leaf from "./images/leaf.jpg";

const TopBid = () => {
  return (
    <div className="flex flex-col w-full h-72">
      <div className="flex flex-col items-end px-5 py-2 rounded-xl w-full  h-full shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]">
        <div
          style={{ backgroundImage: `url(${leaf})` }}
          className="rounded-xl w-full h-4/5 bg-cover bg-center"
        />
      </div>
    </div>
  );
};

export default TopBid;
