import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="banner-container mt-32 me-0 lg:me-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 2.9, delay: 0.2 }}
          className="title-name text-5xl lg:text-8xl text-secondary-dark text-center lg:text-right">
          Oisín McCole
        </motion.h1>
      </div>
    </>
  );
};

export default Banner;
