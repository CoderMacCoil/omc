import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend server
      const response = await axios.post('http://localhost:3000/submit-form', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data); // Log response from server
      onClose(); // Close the modal after form submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Define exit animation
        transition={{ ease: "easeInOut", duration: 1 }} // Define transition for enter and exit animations
        className="modal grid justify-stretch lg:justify-items-end"
      >
        <div className="modal-content bg-secondary-dark rounded-lg shadow-lg py-2 px-4 lg:w-1/2 align-right">
          <span
            className="close text-secondary-light text-2xl cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
          <h2 className="text-2xl mb-4 text-secondary-light">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-secondary-light text-left"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input p-2 block w-full rounded-lg"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-secondary-light text-left"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input p-2 block w-full rounded-lg"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-secondary-light text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input p-2 block w-full rounded-lg"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="p-4 rounded-r-full rounded-tl-full bg-ternary-dark drop-shadow-ois hover:drop-shadow-hoverois text-secondary-light active:translate-y-1 active:drop-shadow-hoverois"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
