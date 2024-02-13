import { motion } from "framer-motion";

function BirthdayGreeting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2.5, delay: 1 }}
      className="mt-8 text-center md:text-left md:ms-8 text-2xl text-secondary-dark drop-shadow">
      <div className="text md:flex">
        <p className="text-pimary-light">Dear brother / uncle,</p>
        <p>you are beautiful.</p>
        <p>Bíodh lá lovely agat.</p>
      </div>
      <p>Grá,</p>
      <div className="signatures flex justify-center">
        <img src="/fi.svg" alt="Fi signature" className="w-24 md:w-48 mt-2" />
        <img src="/rose.svg" alt="Rose signature" className="w-24 md:w-48 mt-2" />
        <img src="/henry.svg" alt="Henry signature" className="w-24 md:w-48 mt-2" />
      </div>
    </motion.div>
  );
}

export default BirthdayGreeting;
