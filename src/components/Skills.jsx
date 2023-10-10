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
    <section className="my-4 px-9">
      <div className="relative flex items-center">
        <h2 className="text-2xl font-bold tracking-tighter text-veryDarkGrey ">
          SKILLS
        </h2>
        <span className="h-[2px] bg-veryDarkGrey w-full absolute left-[4.8rem]" />
      </div>
      <ul className="grid items-center justify-center grid-flow-row grid-cols-2 gap-10 py-8 text-lg font-semibold tracking-tighter">
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </ul>
    </section>
  );
}
