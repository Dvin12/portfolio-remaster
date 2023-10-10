import { BiSolidDownArrow } from "react-icons/bi";

export default function Introduction() {
  return (
    <section className="grid items-center justify-center grid-cols-1 grid-rows-1 mt-6 ">
      <article className="relative z-40 flex items-center justify-center">
        <img
          src="./images/MAIN-1.png"
          alt=""
          className=" bg-[#FFFF]  w-[50%] h-[18rem] object-cover rounded z-30"
        />
        <div className="absolute top-4 rounded bg-darkGrey w-[50%] left-[30%] h-full z-0 bg-opacity-10"></div>
      </article>
      <article className="px-9 mt-14 text-veryDarkGrey">
        <p className="text-3xl font-medium tracking-tight ">Hi, I'm Edvin</p>
        <h1 className="text-5xl font-bold tracking-[-0.06em] leading-[0.95]">
          WEB <br /> DEVELOPER
        </h1>
        <p className="py-3 pr-2 font-medium">
          Currently located in Vilnius, Lithuania. I'm an aspiring developer
          that is hard working, detail-oriented and always up for a challenge.
        </p>
        <section className="flex items-center gap-3 ">
          <button className="px-8 py-2 font-bold tracking-tighter bg-darkGrey bg-opacity-10">
            Contact
          </button>
          <button className="px-8 py-2 font-bold tracking-tighter bg-darkGrey bg-opacity-10">
            Download CV
          </button>
        </section>
      </article>
      <div className="flex items-center justify-center h-full my-6">
        <BiSolidDownArrow size={40} color="#2C3333" />
      </div>
    </section>
  );
}
