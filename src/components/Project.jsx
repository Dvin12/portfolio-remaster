import { AiFillGithub } from "react-icons/ai";
import ProjectMobile from "./ProjectMobile";
import { TbExternalLink } from "react-icons/tb";

export default function Project({ project }) {
  const { name, image, info, builtWith, live, github } = project;

  return (
    <article className="h-[25rem] xl:h-full xl:w-full px-56 relative  ">
      <h3 className="px-5 text-3xl font-bold tracking-tighter xl:px-0 text-veryDarkGrey dark:text-white ">
        {name}
      </h3>
      <ProjectMobile project={project} />
      <div className="absolute top-4 bg-transparent right-56 w-[200px] h-[160px] border-t-[2px] border-r-[2px] rounded-tr dark:border-yellowGreen "></div>
      <section className="grid grid-cols-2 h-[40rem] px-10">
        <div className="relative flex items-center justify-center order-last w-full h-full ">
          <img
            src={image}
            alt={name}
            className="z-30 w-full drop-shadow-lg h-fit"
          />
          <div className="absolute w-full h-[50%] bottom-24 -right-10 bg-darkGrey bg-opacity-20 z-10"></div>
        </div>
        <aside className="flex flex-col justify-center w-[80%] px-4">
          <p className="text-xl text-veryDarkGrey dark:text-white">{info}</p>
          <section className="flex justify-between mt-8">
            <div className="flex gap-2 ">
              {builtWith.map((item, i) => (
                <span key={i} className="dark:text-white dark:text-opacity-80">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-2 dark:text-white dark:text-opacity-80">
              <a href={live}>
                <TbExternalLink size={25} />
              </a>
              <a href={github}>
                <AiFillGithub size={25} />
              </a>
            </div>
          </section>
        </aside>
      </section>
      <div className="absolute bottom-0 bg-transparent left-56 w-[200px] h-[160px] border-b-[2px] border-l-[2px] rounded-bl dark:border-yellowGreen "></div>
    </article>
  );
}
