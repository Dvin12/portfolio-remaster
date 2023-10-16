import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
} from "react-icons/bi";
import Skill from "./Skill";

const skills = [
  {
    name: "HTML",
    icon: <AiFillHtml5 size={60} />,
  },

  {
    name: "CSS",
    icon: <DiCss3 size={60} />,
  },

  {
    name: "SASS",
    icon: <BiLogoSass size={60} />,
  },

  {
    name: "Tailwind",
    icon: <BiLogoTailwindCss size={60} />,
  },

  {
    name: "JavaScript",
    icon: <BiLogoJavascript size={60} />,
  },

  {
    name: "React",
    icon: <BiLogoReact size={60} />,
  },
];

export default function Skills() {
  return (
    <section className="my-4 px-9 xl:px-0 xl:pt-20 ">
      <div className="relative flex items-center xl:px-36">
        <h2 className="text-2xl font-bold tracking-tighter text-veryDarkGrey dark:text-white xl:text-4xl ">
          SKILLS
        </h2>
        <span className="h-[1px] bg-veryDarkGrey w-[70%] absolute right-0 dark:bg-white xl:left-1/2 xl:-translate-x-1/2 xl:w-1/2 " />
      </div>
      <ul className="grid items-center justify-center grid-flow-row grid-cols-2 gap-10 py-8 text-lg font-semibold tracking-tighter xl:flex xl:justify-between xl:px-56 xl:py-24 ">
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </ul>
    </section>
  );
}
