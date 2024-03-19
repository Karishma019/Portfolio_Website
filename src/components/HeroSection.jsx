import devImg from "../assets/dev.svg";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

function HeroSection() {
  return (
    <main id="home" className="bg-slate-100 py-8">
      <div className="container flex items-center gap-4 -lg:flex-col">
        <div className="w-1/2 flex flex-col	gap-8 -lg:w-full">
          <h1 className="text-5xl font-bold text-slate-600 leading-tight -sm:text-3xl">
            Are You Looking For{" "}
            <span className="text-primary">Front-End Web Developer?</span>
          </h1>
          <p className="text-2xl -sm:text-lg">
            Hi, I'm Karishma. An enthusiastic Front-end Web Developer
          </p>
          <ul className="flex gap-2 text-4xl">
            <li>
              <a href="https://github.com/Karishma019">
                <FaSquareGithub />
              </a>
            </li>
            <li className="text-primary">
              <a href="https://www.linkedin.com/in/karishma-acharya-3631611b8/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 animate-zoomIn -lg:w-full">
          <img src={devImg} alt="devImg" className="-lg:h-1/2" />
        </div>
      </div>
      <ul className="container text-5xl flex gap-3 cursor-pointer flex-wrap -sm:text-3xl">
        <p className="text-xl">Tech Stack |</p>
        <li className="text-orange-600 transition-all hover:-translate-y-2">
          <FaHtml5 />
        </li>
        <li className="text-cyan-500 transition-all hover:-translate-y-2">
          <FaCss3Alt />
        </li>
        <li className="text-yellow-400 transition-all hover:-translate-y-2">
          <IoLogoJavascript />
        </li>
        <li className="text-cyan-600 transition-all hover:-translate-y-2">
          <SiTailwindcss />
        </li>
        <li className="text-cyan-500 bg-black rounded transition-all hover:-translate-y-2">
          <FaReact />
        </li>
      </ul>
    </main>
  );
}

export default HeroSection;
