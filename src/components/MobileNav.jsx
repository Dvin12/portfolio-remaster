import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function MobileNav({ theme, handleTheme }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((active) => !active);
  }

  return (
    <>
      <nav className="flex items-center justify-between w-full py-6 px-9 xl:hidden ">
        <img
          src={`./images/${
            theme === "light" ? "logo-light.png" : "logo-dark.png"
          }`}
          alt="logo"
          className="w-[14%]"
        />
        {isActive ? (
          ""
        ) : (
          <button
            onClick={handleClick}
            className=" text-veryDarkGrey dark:text-white"
            title="navigation menu"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>
        )}
        <button
          className="fixed z-40 right-4 bottom-2 text-veryDarkGrey dark:text-white"
          onClick={handleTheme}
          title="dark or light theme"
        >
          {theme === "light" ? (
            <BiSolidMoon size={35} />
          ) : (
            <BiSolidSun size={35} />
          )}
        </button>
      </nav>
      <MobileMenu isActive={isActive} onClick={handleClick} />
    </>
  );
}
