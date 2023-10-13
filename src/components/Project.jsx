import { AiFillGithub } from "react-icons/ai";
import ProjectMobile from "./ProjectMobile";
import { TbExternalLink } from "react-icons/tb";

export default function Project({ project }) {
  const { name, image, info, builtWith, live, github } = project;

  return (
    <article className="h-[25rem] xl:h-full xl:w-full px-56 relative   ">
      <h3 className="px-5 text-3xl font-bold tracking-tighter xl:px-0 text-veryDarkGrey dark:text-white ">
        {name}
      </h3>
      <ProjectMobile project={project} />
      <div className="absolute top-4 bg-transparent right-56 w-[200px] h-[160px] border-t-[3px] border-r-[3px] rounded-tr dark:border-yellowGreen "></div>
      <section className="grid grid-cols-2 h-[45rem] px-10">
        <div className="relative flex items-center justify-center order-last w-full h-full ">
          <img
            src={image}
            alt={name}
            className="z-30 w-full drop-shadow-lg h-fit"
          />
          <div className="absolute w-full h-[50%] bottom-24 -right-10 bg-darkGrey bg-opacity-10 z-10"></div>
        </div>
        <aside className="flex flex-col justify-center w-[80%] px-4 ">
          <p className="text-xl font-medium text-veryDarkGrey dark:text-white">
            {info}
          </p>
          <section className="flex justify-between mt-8">
            <div className="flex gap-2 ">
              {builtWith.map((item, i) => (
                <span
                  key={i}
                  className="text-3xl dark:text-white dark:text-opacity-80"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-2 text-3xl ">
              <a
                href={live}
                className="duration-200 hover:text-opacity-70 text-veryDarkGrey dark:text-white dark:hover:text-opacity-60"
              >
                <TbExternalLink />
              </a>
              <a
                href={github}
                className="duration-200 hover:text-opacity-70 text-veryDarkGrey dark:text-white dark:hover:text-opacity-60"
              >
                <AiFillGithub />
              </a>
            </div>
          </section>
        </aside>
      </section>
      <div className="absolute bottom-0 bg-transparent left-56 w-[200px] h-[160px] border-b-[3px] border-l-[3px] rounded-bl dark:border-yellowGreen "></div>
    </article>
  );
}
