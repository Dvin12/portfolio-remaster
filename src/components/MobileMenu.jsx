import { AiOutlineClose } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-scroll";

export default function MobileMenu({ isActive, onClick }) {
  return (
    <section
      className={`fixed top-0 left-0 z-50 w-full h-screen ${
        isActive ? " translate-x-0" : "translate-x-[100%]"
      }  bg-veryDarkGrey bg-opacity-95 px-9 text-veryLightGrey transition-all duration-200 dark:bg-veryLightGrey dark:bg-opacity-95`}
    >
      <button
        className="absolute right-9 top-6 dark:text-veryDarkGrey "
        onClick={onClick}
      >
        <AiOutlineClose size={30} />
      </button>
      <ul className="flex flex-col justify-center h-full gap-3 text-5xl font-medium tracking-tighter dark:text-veryDarkGrey ">
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-30}
            onClick={onClick}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-30}
            onClick={onClick}
          >
            contact
          </Link>
        </li>
        <li className="flex gap-1 text-4xl">
          <a href="https://github.com/Dvin12" target="_blank" rel="noreferrer">
            <BiLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ed-venclavovic/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoLinkedin />
          </a>
        </li>
      </ul>
    </section>
  );
}
