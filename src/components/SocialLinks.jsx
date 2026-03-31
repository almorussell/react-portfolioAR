import '../index.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
   
      <a href="https://github.com/almorussell" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/almorussell/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>

      <a href="https://www.instagram.com/zotallyzen/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>

    </div>
  
  );
  
}

export default SocialLinks;