import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="container mx-auto px-3.5 md:px-24">
        <h1 className="leading-relaxed text-2xl text-center font-clash md:text-6xl md:leading-[5rem]">
          Photography is poetry and beautiful untold stories
        </h1>
        <p className="text-center leading-6 text-md mt-4 font-satoshi md:px-10">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div
        className="hero-images my-10 relative h-[28rem]  md:flex
       md:static md:space-x-10 md:translate-y-0 md:translate-x-0 md:justify-center"
      >
        <div className="md:w-[22%] md:h-[444px] md:overflow-clip">
          <motion.div
            animate={{
              translateX: [
                "0%",
                "-100%",
                "-100%",
                "-200%",
                "-200%",
                "-300%",
                "-300%",
                "0%",
              ],
            }}
            transition={{
              times: [0, 0.2, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 8,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:flex md:items-center md:justify-start"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/girl.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[444px] md:shrink-0 "></div>
            <div className="hidden bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0"></div>
            <div className="hidden bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0"></div>
            <div className="hidden bg-[url('./images/guy.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[332px] md:inline-block md:shrink-0"></div>
          </motion.div>
        </div>
        <div className="md:w-[22%] md:h-[444px] md:overflow-clip ">
          <motion.div
            animate={{
              translateX: [
                "-100%",
                "-200%",
                "-200%",
                "-300%",
                "-300%",
                "0%",
                "0%",
                "-100%",
              ],
            }}
            transition={{
              times: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:-translate-x-[100%] md:flex md:items-center md:justify-start"
          >
            <div className="hidden bg-[url('./images/girl.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[444px] md:inline-block md:shrink-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:shrink-0 "></div>
            <div className="hidden bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[100%] md:inline-block md:shrink-0 "></div>
            <div className="hidden bg-[url('./images/guy.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[332px] md:inline-block md:shrink-0 "></div>
          </motion.div>
        </div>
        <div className="md:w-[22%] md:h-[444px] md:overflow-clip ">
          <div className="w-full h-full md:-translate-x-[200%] md:flex md:items-center md:justify-start">
            <div className="hidden bg-[url('./images/girl.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[444px] md:inline-block md:shrink-0"></div>
            <div className="hidden bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block  md:shrink-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:shrink-0 "></div>
            <div className="hidden bg-[url('./images/guy.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[332px] md:inline-block  md:shrink-0"></div>
          </div>
        </div>
        <div className="md:w-[22%] md:h-[444px] md:overflow-clip ">
          <div className="w-full h-full md:-translate-x-[300%] md:flex md:items-center md:justify-start">
            <div className="hidden bg-[url('./images/girl.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[444px] md:inline-block md:shrink-0"></div>
            <div className="hidden bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0 "></div>
            <div className="hidden bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0 "></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/guy.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[332px]  md:shrink-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
