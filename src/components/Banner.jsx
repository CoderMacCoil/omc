import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5, delay: 0.2 }}
          className="title-name text-6xl md:text-8xl lg:text-10xl text-secondary-dark text-center lg:text-right">
          Oisín McCole
        </motion.h1>
      </div>
    </>
  );
};

export default Banner;