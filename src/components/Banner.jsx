import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="banner-container mt-16 me-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 2.9, delay: 0.2 }}
          className="title-name text-8xl text-secondary-dark text-right">
          Oisín McCole
        </motion.h1>
      </div>
    </>
  );
};

export default Banner;
