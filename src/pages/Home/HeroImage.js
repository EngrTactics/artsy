import { motion } from "framer-motion";

const HeroImages = () => {
  return (
    <div className="hero-images">
      <div className=" relative h-96 md:hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/girl.jpg')] bg-center bg-cover "></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/guy.jpg')] bg-center bg-cover"></div>
      </div>
      <div
        className="my-10 relative h-[28rem]
   md:static md:space-x-10 md:translate-y-0 md:translate-x-0 md:justify-center hidden md:flex"
      >
        <div className=" md:w-[22%] md:h-[444px] md:overflow-clip">
          <motion.div
            animate={{
              translateX: [
                "-100%",
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
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:flex md:items-center md:justify-start 
          "
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
                "-200%",
                "-200%",
                "-300%",
                "-300%",
                "0%",
                "0%",
                "-100%",
                "-100%",
                "-200%",
              ],
            }}
            transition={{
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
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
          <motion.div
            animate={{
              translateX: [
                "-300%",
                "-300%",
                "0%",
                "0%",
                "-100%",
                "-100%",
                "-200%",
                "-200%",
                "-300%",
              ],
            }}
            transition={{
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:-translate-x-[200%] md:flex md:items-center md:justify-start"
          >
            <div className="hidden bg-[url('./images/girl.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[444px] md:inline-block md:shrink-0"></div>
            <div className="hidden bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block  md:shrink-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:shrink-0 "></div>
            <div className="hidden bg-[url('./images/guy.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[332px] md:inline-block  md:shrink-0"></div>
          </motion.div>
        </div>
        <div className="md:w-[22%] md:h-[444px] md:overflow-clip ">
          <motion.div
            animate={{
              translateX: [
                "0%",
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
              times: [0, 0, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
              duration: 10,
              repeatType: "loop",
              repeat: Infinity,
            }}
            className="w-full h-full md:-translate-x-[300%] md:flex md:items-center md:justify-start"
          >
            <div className="hidden bg-[url('./images/girl.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[444px] md:inline-block md:shrink-0"></div>
            <div className="hidden bg-[url('./images/leaf.jpg')] bg-center bg-cover rotate-[-9.31deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0 "></div>
            <div className="hidden bg-[url('./images/kangaroo.jpg')] bg-center bg-cover rotate-[7.75deg] md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[428px] md:inline-block md:shrink-0 "></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[url('./images/guy.jpg')] bg-center bg-cover md:static  md:translate-y-0 md:translate-x-0 md:rotate-0 md:w-[100%] md:h-[332px]  md:shrink-0"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
