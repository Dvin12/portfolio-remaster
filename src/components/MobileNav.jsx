import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedin, BiSolidMoon } from "react-icons/bi";
import { useState } from "react";

export default function MobileNav() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <>
      <nav className="flex items-center justify-between w-full py-6 px-9">
        <span className="text-2xl font-bold tracking-tighter text-veryDarkGrey">
          EV
        </span>
        {isActive ? (
          ""
        ) : (
          <button onClick={handleClick}>
            <HiOutlineMenuAlt3 size={30} color="#2C3333" />
          </button>
        )}
        <button className="fixed right-4 bottom-4" onClick={handleClick}>
          <BiSolidMoon size={30} color="#2C3333" />
        </button>
      </nav>

      <section
        className={`fixed top-0 left-0 z-50 w-full h-screen ${
          isActive ? " translate-x-0" : "translate-x-[100%]"
        }  bg-veryDarkGrey bg-opacity-95 px-9 text-veryLightGrey transition-all duration-200`}
      >
        <button className="absolute right-9 top-6 " onClick={handleClick}>
          <AiOutlineClose size={30} />
        </button>
        <ul className="flex flex-col justify-center h-full gap-3 text-5xl font-medium tracking-tighter ">
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li className="flex gap-1 text-4xl">
            <a href="#">
              <BiLogoGithub />
            </a>
            <a href="#">
              <BiLogoLinkedin />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
