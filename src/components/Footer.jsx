import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="container flex justify-between text-white">
        <p className="text-lg font-bold">
          Copyright © 2024. All rights are reserved
        </p>
        <ul className="flex gap-2 text-4xl">
          <li className="hover:text-black">
            <a href="https://github.com/Karishma019">
              <FaSquareGithub />
            </a>
          </li>
          <li className="hover:text-black">
            <a href="https://www.linkedin.com/in/karishma-acharya-3631611b8/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
