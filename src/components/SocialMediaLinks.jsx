import links from "../db/socialMediaLinks";
import { FaYoutube, FaInstagram, FaPatreon } from "react-icons/fa";
import { motion } from "framer-motion";

function getIconComponent(iconName) {
  switch (iconName) {
    case "FaYoutube":
      return <FaYoutube />;
    case "FaInstagram":
      return <FaInstagram />;
    case "FaPatreon":
      return <FaPatreon />;
    default:
      return null;
  }
}

function SocialMediaLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 2.9, delay: 0.2 }}
      className="links flex gap-4 mt-4 justify-center lg:justify-end"
    >
      {links.map((link) => (
        <>
          <a href={link.link} target="_blank rel=noreferrer">
            <p className=" text-secondary-dark text-3xl drop-shadow-ois hover:drop-shadow-hoverois active:translate-y-1 active:drop-shadow-hoverois">
            {getIconComponent(link.icon)}
            </p>
          </a>
        </>
  
      ))}
      
    </motion.div>
  );
}

export default SocialMediaLinks;
