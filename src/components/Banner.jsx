import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 2.9, delay: 0.2 }}
        className="flex justify-center ">
        <h1 className="title-name mt-24 text-8xl text-secondary-dark">
          Oisín McCole
        </h1>
      </motion.div>
    </>
  );
};

export default Banner;
