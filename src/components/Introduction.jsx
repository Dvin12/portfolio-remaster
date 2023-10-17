import { Link } from "react-scroll";
import Button from "./Button";

export default function Introduction() {
  return (
    <section className="grid items-center justify-center grid-cols-1 grid-rows-1 my-8 xl:grid-cols-2 xl:my-28 ">
      <article className="relative z-40 flex items-center justify-center mb-3 xl:order-last">
        <img
          src="./images/MAIN-1.png"
          alt=""
          className=" bg-white  w-[50%] h-[20%] md:h-[10%] md:w-[40%] object-cover rounded z-30 2xl:h-[37rem] xl:w-[24rem] 2xl:w-[28rem]"
        />
        <div className="absolute top-4 rounded bg-darkGrey w-[40%] md:w-[40%] md:left-[40%] left-[40%] h-full z-0 bg-opacity-10 dark:bg-lightBlack dark:bg-opacity-80 xl:right-0 xl:left-auto xl:top-10"></div>
        <div className="w-[60px] h-[60px] xl:w-[120px] xl:h-[120px] border-l-[4px] border-t-[4px] rounded-tl border-veryDarkGrey dark:border-yellowGreen  absolute 2xl:-top-10 2xl:left-[10%] -top-5 left-10"></div>
        <div className="w-[60px] h-[60px] xl:w-[120px] xl:h-[120px] border-r-[4px] border-b-[4px] rounded-br border-veryDarkGrey dark:border-yellowGreen  absolute xl:-bottom-20 2xl:right-[10%] -bottom-10 right-10 "></div>
      </article>
      <article className="w-full px-9 mt-14 text-veryDarkGrey dark:text-white xl:px-24 2xl:px-36 xl:mt-0 md:flex md:flex-col md:items-center md:text-center xl:items-start xl:text-left">
        <p className="text-3xl font-medium tracking-tight md:text-lg xl:text-2xl ">
          Hi, I'm Edvin
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.06em] leading-[0.95] md:text-5xl  xl:text-7xl">
          WEB <br /> DEVELOPER
        </h1>
        <p className="py-3 pr-2 font-medium leading-relaxed md:w-[60%] xl:text-lg xl:w-[85%] 2xl:w-[70%]  ">
          Currently located in Vilnius, Lithuania. I'm an aspiring developer
          that is hard working, detail-oriented and always up for a challenge.
        </p>
        <section className="flex items-center justify-center gap-6 my-6 text-veryDarkGrey dark:text-white md:justify-start xl:text-xl">
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
