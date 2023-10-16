import { Link } from "react-scroll";
import Button from "./Button";

export default function Introduction() {
  return (
    <section className="grid items-center justify-center grid-cols-1 grid-rows-1 my-8 xl:grid-cols-2 xl:my-28 ">
      <article className="relative z-40 flex items-center justify-center mb-3 xl:order-last">
        <img
          src="./images/MAIN-1.png"
          alt=""
          className=" bg-white  w-[50%] h-[18rem] object-cover rounded z-30 xl:h-[37rem] xl:w-[28rem]"
        />
        <div className="absolute top-4 rounded bg-darkGrey w-[50%] left-[30%] h-full z-0 bg-opacity-10 dark:bg-lightBlack dark:bg-opacity-80 xl:right-0 xl:left-auto xl:top-10"></div>
        <div className="w-[60px] h-[60px] xl:w-[120px] xl:h-[120px] border-l-[4px] border-t-[4px] rounded-tl border-veryDarkGrey dark:border-yellowGreen  absolute xl:-top-10 xl:left-40 -top-5 left-10"></div>
        <div className="w-[60px] h-[60px] xl:w-[120px] xl:h-[120px] border-r-[4px] border-b-[4px] rounded-br border-veryDarkGrey dark:border-yellowGreen  absolute xl:-bottom-20 xl:right-40 -bottom-10 right-10 "></div>
      </article>
      <article className="px-9 mt-14 text-veryDarkGrey dark:text-white xl:px-36 xl:mt-0 ">
        <p className="text-3xl font-medium tracking-tight xl:text-2xl ">
          Hi, I'm Edvin
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.06em] leading-[0.95] xl:text-7xl">
          WEB <br /> DEVELOPER
        </h1>
        <p className="py-3 pr-2 font-medium leading-relaxed xl:text-lg 2xl:w-[70%]  ">
          Currently located in Vilnius, Lithuania. I'm an aspiring developer
          that is hard working, detail-oriented and always up for a challenge.
        </p>
        <section className="flex items-center justify-between my-6 text-veryDarkGrey dark:text-white xl:justify-start xl:gap-3 xl:text-xl">
          <Button px={10} border="bottom">
            Résumé
          </Button>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-30}
          >
            <Button px={10} border="top">
              Projects
            </Button>
          </Link>
        </section>
      </article>
    </section>
  );
}
