import PrimaryButton from "./PrimaryButton";

const Links = () => {
  return (
    <div className="links my-20">
      <div className="w-full h-10 flex justify-between items-center border-black border-y-2 px-5 py-8 md:py-14 md:px-32">
        <h1 className="text-2xl">Explore MarketPlace</h1>
        <PrimaryButton
          custom={"border-black border-[1px]"}
          arrow={" h-5 w-5 md:w-10 md:h-10"}
        ></PrimaryButton>
      </div>
      <div className="w-full h-10 flex justify-between items-center border-black border-b-2 px-5 py-8 md:py-14 md:px-32">
        <h1 className="text-2xl">See Auctions</h1>
        <PrimaryButton
          custom={"border-black border-[1px]"}
          arrow={"h-5 w-5 md:w-10 md:h-10"}
        ></PrimaryButton>
      </div>
    </div>
  );
};

export default Links;
