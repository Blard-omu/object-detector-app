import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#232233] text-white/80 text-center px-4 py-10">
      {/* Gradient Heading */}
      <h3 className="text-2xl lg:text-6xl font-bold bg-gradient-to-r from-[#5c4efc]/50 via-white/20 to-transparent bg-clip-text text-transparent">
        Detector App
      </h3>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Peter Omu. All rights reserved.
      </div>

      {/* Logo & Socials */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-4 mt-2">
          <Link
            href="https://github.com/Blard-omu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5 hover:text-[#5c4efc] transition-colors duration-200" />
          </Link>
          <Link
            href="https://linkedin.com/in/peteromu5239"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 hover:text-[#5c4efc] transition-colors duration-200" />
          </Link>
          <Link
            href="https://x.com/peteromu76"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="h-5 w-5 hover:text-[#5c4efc] transition-colors duration-200" />
          </Link>
          <Link
            href="https://youtube.com/blard-omu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="h-5 w-5 hover:text-[#5c4efc] transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


