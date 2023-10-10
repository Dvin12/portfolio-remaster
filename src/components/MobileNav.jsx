import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiSolidMoon,
  BiSolidSun,
} from "react-icons/bi";
import { useState } from "react";

export default function MobileNav({ setTheme, theme }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  function handleTheme() {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <nav className="flex items-center justify-between w-full py-6 px-9">
        <span className="text-2xl font-bold tracking-tighter text-veryDarkGrey dark:text-white">
          EV
        </span>
        {isActive ? (
          ""
        ) : (
          <button
            onClick={handleClick}
            className=" text-veryDarkGrey dark:text-white"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>
        )}
        <button
          className="fixed z-40 right-4 bottom-2 text-veryDarkGrey dark:text-white"
          onClick={handleTheme}
        >
          {theme === "light" ? (
            <BiSolidMoon size={35} />
          ) : (
            <BiSolidSun size={35} />
          )}
        </button>
      </nav>

      <section
        className={`fixed top-0 left-0 z-50 w-full h-screen ${
          isActive ? " translate-x-0" : "translate-x-[100%]"
        }  bg-veryDarkGrey bg-opacity-95 px-9 text-veryLightGrey transition-all duration-200 dark:bg-white dark:bg-opacity-95`}
      >
        <button
          className="absolute right-9 top-6 dark:text-veryDarkGrey "
          onClick={handleClick}
        >
          <AiOutlineClose size={30} />
        </button>
        <ul className="flex flex-col justify-center h-full gap-3 text-5xl font-medium tracking-tighter dark:text-veryDarkGrey ">
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
