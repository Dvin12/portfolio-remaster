export default function Introduction() {
  return (
    <section className="grid items-center justify-center grid-cols-1 grid-rows-1 mt-6 xl:grid-cols-2 xl:my-28 ">
      <article className="relative z-40 flex items-center justify-center xl:order-last">
        <img
          src="./images/MAIN-1.png"
          alt=""
          className=" bg-[#FFFF]  w-[50%] h-[18rem] object-cover rounded z-30 xl:h-[50rem] xl:w-[35rem]"
        />
        <div className="absolute top-4 rounded bg-darkGrey w-[50%] left-[30%] h-full z-0 bg-opacity-10 dark:bg-lightBlack dark:bg-opacity-80 xl:right-0 xl:left-auto xl:top-10"></div>
      </article>
      <article className="px-9 mt-14 text-veryDarkGrey dark:text-white xl:px-56 xl:mt-0">
        <p className="text-3xl font-medium tracking-tight xl:text-3xl ">
          Hi, I'm Edvin
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.06em] leading-[0.95] xl:text-8xl">
          WEB <br /> DEVELOPER
        </h1>
        <p className="py-3 pr-2 font-medium leading-relaxed xl:text-2xl xl:w-[85%]">
          Currently located in Vilnius, Lithuania. I'm an aspiring developer
          that is hard working, detail-oriented and always up for a challenge.
        </p>
        <section className="flex items-center justify-between my-6 text-veryDarkGrey dark:text-white xl:justify-start xl:gap-4 xl:text-2xl">
          <button className="px-8 py-2 font-bold tracking-tighter bg-darkGrey bg-opacity-10 dark:bg-lightBlack dark:bg-opacity-60 xl:px-12 xl:py-3">
            Contact
          </button>
          <button className="py-2 font-bold tracking-tighter px-9 bg-darkGrey bg-opacity-10 dark:bg-lightBlack dark:bg-opacity-60 xl:px-14 xl:py-3">
            Download CV
          </button>
        </section>
      </article>
    </section>
  );
}
