import { AiFillGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

export default function Project({ project }) {
  const { name, image, info, builtWith, live, github } = project;

  return (
    <article className="h-[25rem] xl:h-full xl:w-full xl:px-56 relative   ">
      <h3 className="px-5 text-2xl font-bold tracking-tighter xl:text-3xl xl:px-0 text-veryDarkGrey dark:text-white ">
        {name}
      </h3>

      <div className="absolute top-4 bg-transparent right-56 w-[200px] h-[160px] border-t-[3px] border-r-[3px] rounded-tr dark:border-yellowGreen hidden xl:block "></div>
      <section className="xl:grid xl:grid-cols-2 xl:h-[45rem] xl:px-10 relative">
        <div className="relative flex w-full h-full xl:items-center xl:justify-center xl:order-last ">
          <img
            src={image}
            alt={name}
            className="z-30 w-full px-5 xl:px-0 drop-shadow-md xl:h-fit"
          />
          <div className="absolute w-full h-[50%] bottom-24 -right-10 bg-darkGrey bg-opacity-10 z-10 hidden xl:block"></div>
        </div>
        <aside className="xl:flex xl:flex-col xl:justify-center xl:w-[80%] xl:px-4 absolute  right-0 px-5 bg-darkGrey bg-opacity-10 w-[21rem] h-auto xl:static top-10 rounded-bl-lg py-4 dark:bg-lightBlack dark:bg-opacity-60 xl:bg-transparent xl:dark:bg-transparent ">
          <p className="font-medium xl:text-xl text-veryDarkGrey dark:text-white pt-[8rem] xl:pt-0">
            {info}
          </p>
          <section className="flex items-center justify-between mt-4 xl:mt-8">
            <div className="flex gap-2 ">
              {builtWith.map((item, i) => (
                <span
                  key={i}
                  className="text-2xl xl:text-3xl dark:text-white dark:text-opacity-80"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-2 text-2xl xl:text-3xl ">
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
      <div className="absolute bottom-0 bg-transparent left-56 w-[200px] h-[160px] border-b-[3px] border-l-[3px] rounded-bl dark:border-yellowGreen hidden xl:block "></div>
    </article>
  );
}
