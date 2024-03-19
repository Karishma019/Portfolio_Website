import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-xl h-16 flex items-center bg-primary text-white sticky z-50 top-0">
      <div className="container flex justify-between items-center">
        <div className="logo cursor-pointer">
          <h1 className="text-4xl font-bold">
            <a href="#home">{`Karishma</>`}</a>
          </h1>
        </div>
        <span className="hidden -lg:block">
          {isOpen ? (
            <IoMdClose
              className="-lg:text-5xl -lg:text-primary -lg:absolute -lg:right-5 -lg:top-2 z-40 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <FiAlignJustify
              className="-lg:text-5xl -lg:absolute -lg:right-5 -lg:top-2 z-40 cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </span>

        <nav
          className={`${
            isOpen ? "-lg:translate-x-0	" : "-lg:translate-x-full"
          } -lg:bg-[#ffffffef] -lg:text-primary -lg:absolute -lg:right-0 -lg:top-0 -lg:w-64 -lg:h-screen -lg:transition-all	overflow-x-hidden`}
        >
          <ul className="flex gap-6 text-xl font-semibold -lg:flex-col -lg:text-center -lg:pt-20 -lg:text-2xl">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
