import { FaYoutube, FaInstagram, FaPatreon } from "react-icons/fa";
import { motion } from "framer-motion";

function SocialMediaLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 2.9, delay: 0.2 }}
      className="links flex gap-4 justify-center lg:justify-end mt-8">
      <a
        href="https://www.youtube.com/channel/UCXahfYAcK7KLjtfJfLC2F3g?app=desktop"
        target="_blank">
        <p className="gap-4 text-secondary-dark text-4xl drop-shadow-ois hover:drop-shadow-hoverois">
          <FaYoutube />
        </p>
      </a>
      <a href="https://www.instagram.com/oisinmccolemusic/" target="_blank">
        <p className="gap-4 text-secondary-dark text-4xl drop-shadow-ois hover:drop-shadow-hoverois">
          <FaInstagram />
        </p>
      </a>
      <a href="https://www.patreon.com/OisinMcCole/posts" target="_blank">
        <p className="gap-4 me-0 lg:me-16 text-secondary-dark text-4xl drop-shadow-ois hover:drop-shadow-hoverois">
          <FaPatreon />
        </p>
      </a>
    </motion.div>
  );
}

export default SocialMediaLinks;
