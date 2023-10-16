import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="my-4 px-9 xl:px-0 " id="contact">
      <div className="relative flex items-center xl:px-36 xl:py-10">
        <h2 className="text-2xl font-bold tracking-tighter xl:text-4xl text-veryDarkGrey dark:text-white ">
          CONTACT
        </h2>
        <span className="h-[1px] bg-veryDarkGrey w-[60%] absolute right-0  dark:bg-white xl:left-1/2 xl:-translate-x-1/2 xl:w-1/2" />
      </div>
      <div className="flex flex-col items-center justify-center py-10 text-center xl:px-80 dark:text-white text-veryDarkGrey">
        <h3 className="text-2xl font-bold tracking-tighter xl:text-5xl">
          Let's Talk.
        </h3>
        <p className="py-8 xl:text-xl xl:w-[50%] leading-relaxed font-medium">
          I'm currently available full-time and looking for new opportunities.
          Feel free to call or send me a message.
        </p>
        <div className="mt-2 xl:text-xl ">
          <Button border="bottom">
            <a href="mailto:edvinasvenclavovic@gmail.com">Contact</a>
          </Button>
        </div>
        <div className="flex flex-col gap-3 my-10 text-sm xl:text-base ">
          <div className="flex items-center justify-center gap-2">
            <FaPhone />
            +37065387994
          </div>
          <div className="flex items-center justify-center gap-2">
            <IoMail />
            edvinasvenclavovic@gmail.com
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-3xl xl:hidden">
          <a
            href="https://www.linkedin.com/in/ed-venclavovic/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoLinkedin />
          </a>
          <a href="https://github.com/Dvin12" target="_blank" rel="noreferrer">
            <BiLogoGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
