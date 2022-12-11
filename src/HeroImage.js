const HeroImages = () => {
  return (
    <div className=" girl md:w-[22%] md:h-[444px] md:flex md:items-center md:justify-start md:overflow-clip ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/girl.jpg')] bg-center bg-cover md:static  md:translate-y-0  md:rotate-0 md:w-[100%] md:h-[444px] md:shrink-0 md:-translate-x-full"></div>
      <div className="hidden bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[358px] md:h-[428px] md:inline-block md:shrink-0"></div>
      <div className="hidden bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0"></div>
      <div className="hidden bg-[url('./images/guy.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[332px] md:inline-block md:shrink-0"></div>
    </div>
  );
};

export default HeroImages;
