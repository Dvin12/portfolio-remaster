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
    <section className="my-4 px-9 xl:px-0 ">
      <div className="relative flex items-center xl:px-56">
        <h2 className="text-2xl font-bold tracking-tighter text-veryDarkGrey dark:text-white xl:text-5xl ">
          SKILLS
        </h2>
        <span className="h-[2px] bg-veryDarkGrey w-full absolute left-[4.8rem] dark:bg-white xl:left-[23.6rem]" />
      </div>
      <ul className="grid items-center justify-center grid-flow-row grid-cols-2 gap-10 py-8 text-lg font-semibold tracking-tighter xl:flex xl:justify-between xl:px-56 xl:py-14 ">
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </ul>
    </section>
  );
}
