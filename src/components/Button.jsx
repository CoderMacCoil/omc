import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2.5, delay: 1 }}
        className="p-4 my-8 rounded-r-full rounded-tl-full bg-secondary-dark drop-shadow-ois hover:drop-shadow-hoverois text-secondary-light active:translate-y-1 active:drop-shadow-hoverois"
        onClick={showModal ? closeModal : openModal}
      >
        {showModal ? "Nice" : text}
      </motion.button>
      {showModal && <Modal onClose={closeModal} />}
    </>
  );
};

export default Button;
