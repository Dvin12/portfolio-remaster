import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export default function DesktopNav({ theme, handleTheme }) {
  return (
    <nav className="items-center justify-between hidden py-10 xl:flex px-44">
      <span className="text-4xl font-bold tracking-tighter text-veryDarkGrey dark:text-white">
        EV
      </span>
      <ul className="flex items-center justify-center gap-4 text-3xl font-bold tracking-tighter text-veryDarkGrey dark:text-white">
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <button onClick={handleTheme}>
            {theme === "light" ? (
              <BiSolidMoon size={40} />
            ) : (
              <BiSolidSun size={40} />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}
