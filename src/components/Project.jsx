import { AiFillGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

export default function Project({ project }) {
  const { name, image, info, builtWith, live, github } = project;

  return (
    <article className="relative w-full h-full 2xl:px-56 px-9 xl:px-36">
      <h3 className="font-bold tracking-tighter xl:text-3xl text-veryDarkGrey dark:text-white">
        {name}
      </h3>

      <div className="absolute xl:top-4 bg-transparent 2xl:right-56 xl:w-[200px] w-[80px] h-[50px] top-3 right-3 xl:right-14 xl:h-[160px] xl:border-t-[3px] xl:border-r-[3px] border-t-[2px] border-r-[2px] rounded-tr dark:border-yellowGreen  "></div>
      <section className="grid xl:grid-cols-2 xl:h-[45rem] 2xl:px-10 relative grid-cols-1  items-center justify-center py-4 ">
        <div className="relative flex w-auto h-auto xl:items-center xl:justify-center xl:order-last ">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="z-30 duration-200 cursor-pointer xl:px-0 drop-shadow-md xl:h-fit hover:opacity-80"
          >
            <img src={image} alt={name}></img>
          </a>
          <div className="absolute z-10 w-full h-full xl:-bottom-10 -bottom-5 md:-bottom-12 -right-5 xl:-right-10 bg-darkGrey bg-opacity-10 "></div>
        </div>
        <aside className="flex flex-col xl:justify-center xl:w-[80%] 2xl:px-4 my-14 xl:my-0 md:my-20 ">
          <p className="font-medium xl:text-xl text-veryDarkGrey dark:text-white xl:pt-0 ">
            {info}
          </p>
          <section className="flex items-center justify-between mt-4 xl:mt-8">
            <div className="flex gap-2 ">
              {builtWith.map((item, i) => (
                <span
                  key={i}
                  className="text-2xl dark:text-white dark:text-opacity-80"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-2 text-2xl ">
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="duration-200 hover:text-opacity-70 text-veryDarkGrey dark:text-white dark:hover:text-opacity-60"
              >
                <TbExternalLink />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="duration-200 hover:text-opacity-70 text-veryDarkGrey dark:text-white dark:hover:text-opacity-60"
              >
                <AiFillGithub />
              </a>
            </div>
          </section>
        </aside>
      </section>
      <div className="absolute bottom-0 bg-transparent 2xl:left-56 xl:left-36 left-4 xl:w-[200px] xl:h-[160px] xl:border-b-[3px] xl:border-l-[3px] w-[80px] h-[50px] border-b-[2px] border-l-[2px] rounded-bl dark:border-yellowGreen  "></div>
    </article>
  );
}
