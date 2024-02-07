import { FaYoutube, FaInstagram, FaPatreon } from "react-icons/fa";

function SocialMediaLinks() {
  return (
    <div className="links flex justify-end mt-8">
      <a href="https://www.youtube.com/channel/UCXahfYAcK7KLjtfJfLC2F3g?app=desktop">
        <p className="me-8 text-secondary-dark text-4xl drop-shadow-ois hover:drop-shadow-hoverois">
          <FaYoutube />
        </p>
      </a>
      <a href="https://www.instagram.com/oisinmccolemusic/">
        <p className="me-8 text-secondary-dark text-4xl drop-shadow-ois hover:drop-shadow-hoverois">
          <FaInstagram />
        </p>
      </a>
      <a href="https://www.patreon.com/OisinMcCole/posts">
        <p className="me-8 text-secondary-dark text-4xl drop-shadow-ois hover:drop-shadow-hoverois">
          <FaPatreon />
        </p>
      </a>
    </div>
  );
}

export default SocialMediaLinks;
