import { TbExternalLink } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

export default function Project({ project }) {
  const { name, image, info, builtWith, live, github } = project;

  return (
    <article className="h-[25rem] ">
      <h3 className="px-5 text-xl font-bold tracking-tighter text-veryDarkGrey ">
        {name}
      </h3>
      <section className="relative ">
        <div className="z-30 flex ">
          <img
            src={image}
            alt={name}
            className="z-30 px-5 rounded-lg drop-shadow-md"
          />
        </div>
        <aside className="absolute  right-0 px-5 bg-darkGrey bg-opacity-10 w-[21rem] h-auto top-10 rounded-bl-lg py-4 ">
          <p className="pt-[8rem] font-bold tracking-tighter text-veryDarkGrey">
            {info}
          </p>
          <section className="flex items-center justify-between mt-2">
            <div className="flex">
              {builtWith.map((item) => (
                <span>{item}</span>
              ))}
            </div>
            <div className="flex gap-1">
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
    </article>
  );
}

{
  /* {builtWith.map((item) => (
        <button>{item}</button>
      ))} */
}
