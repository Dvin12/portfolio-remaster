import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiSolidMoon,
  BiSolidSun,
} from "react-icons/bi";

export default function DesktopNav({ theme, handleTheme }) {
  return (
    <nav className="items-center justify-between hidden px-20 py-10 xl:flex">
      <span className="text-3xl font-bold tracking-tighter text-veryDarkGrey dark:text-white">
        EV
      </span>
      <ul className="flex items-center justify-center gap-4 text-2xl font-bold tracking-tighter ">
        <li>
          <a
            href="#"
            className="duration-200 hover:text-opacity-70 text-veryDarkGrey dark:text-white dark:hover:text-opacity-80"
          >
            projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="duration-200 hover:text-opacity-70 text-veryDarkGrey dark:text-white dark:hover:text-opacity-80"
          >
            contact
          </a>
        </li>
        <li>
          <button
            onClick={handleTheme}
            className="duration-200 hover:text-opacity-70 text-veryDarkGrey dark:text-white dark:hover:text-opacity-80"
          >
            {theme === "light" ? (
              <BiSolidMoon size={30} />
            ) : (
              <BiSolidSun size={30} />
            )}
          </button>
        </li>
      </ul>
      <section className="fixed bottom-0 z-30 flex flex-col items-center justify-center ">
        <div className="h-8 dark:bg-white w-[2px] bg-veryDarkGrey"></div>
        <div className="flex flex-col items-center justify-center gap-1 py-2">
          <button className="duration-200 text-veryDarkGrey dark:text-white hover:text-opacity-70 dark:hover:text-opacity-60">
            <a href="#">
              <BiLogoGithub size={34} />
            </a>
          </button>
          <button className="duration-200 text-veryDarkGrey dark:text-white hover:text-opacity-70 dark:hover:text-opacity-60">
            <a href="#">
              <BiLogoLinkedinSquare size={34} />
            </a>
          </button>
        </div>
        <div className="h-10 dark:bg-white w-[2px] bg-veryDarkGrey"></div>
      </section>
    </nav>
  );
}
