import creator1 from "../../images/frownGuy.png";
import creator2 from "../../images/smallGuy.png";
import creator3 from "../../images/lady2.png";
import { motion } from "framer-motion";

const TopCreators = () => {
  return (
    <section
      id="top-creators"
      className="bg-gray-200 mb-10 font-clash flex flex-col relative overflow-hidden md:h-[90vh] md:p-14"
    >
      <p className="absolute -right-24 text-sm">
        Editorials &#10022; Fashion &#10022; Lifestyle &#10022; Blueprint
      </p>

      <h1 className="relative top-3 w-2/3 text-3xl md:text-6xl">
        TOP CREATORS OF THE WEEK
      </h1>
      <p className="text-center my-10 mb-20 opacity-80 md:text-3xl md:p-14">
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>
      <h1 className="text-6xl right-0 bottom-1/3 absolute md:right-20">
        CIRCA
      </h1>
      <h1 className="text-8xl absolute right-0 bottom-0 line-through md:bottom-10 md:right-10">
        1985
      </h1>
      {/* top creators images and animations */}
      <div className="absolute bottom-0 right-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 1,
            repeatType: "mirror",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          src={creator1}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 6,
            duration: 3,
            repeatType: "mirror",
            repeatDelay: 6,
            repeat: Infinity,
          }}
          src={creator2}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 9,
            duration: 3,
            repeatType: "mirror",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          src={creator3}
          alt=""
        />
      </div>
    </section>
  );
};

export default TopCreators;
