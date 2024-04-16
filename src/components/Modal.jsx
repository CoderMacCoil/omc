//framer-motion
import { motion, AnimatePresence } from "framer-motion";

//formspree
import { useForm, ValidationError } from "@formspree/react";

const Modal = ({ onClose }) => {
  const [state, handleSubmit] = useForm("mayrlrkb");
  const thankYouMessage = "I'll get back to you as soon as I can.";

  if (state.succeeded) {
    setTimeout(() => {
      onClose();
    }, 5000);
    return <p className="text-secondary-dark">{thankYouMessage}</p>;
  }

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
          <form
            id="fs-frm"
            name="simple-contact-form"
            action="https://formspree.io/f/mayrlrkb"
            method="post"
            onSubmit={handleSubmit}
          >
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
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
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
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="form-input p-2 rounded-full checked:accent-secondary-light me-2"
              />
              <label
                htmlFor="newsletter"
                className="block text-secondary-light text-left"
              >
                Recieve updates about gigs and songs and stuff.
              </label>
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
