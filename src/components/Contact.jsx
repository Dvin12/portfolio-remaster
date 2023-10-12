import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import ContactForm from "./ContactForm";

const contacts = [
  {
    phoneIcon: <FaPhone />,
    phone: "+37065387994",
    emailIcon: <IoMail />,
    email: "edvinasvenclavovic@gmail.com",
  },
];

export default function Contact() {
  return (
    <section className="my-4 px-9 xl:px-0 ">
      <div className="relative flex items-center xl:px-36">
        <h2 className="text-2xl font-bold tracking-tighter xl:text-4xl text-veryDarkGrey dark:text-white ">
          CONTACT
        </h2>
        <span className="h-[1px] bg-veryDarkGrey w-full absolute left-[6.9rem]  dark:bg-white xl:left-1/2 xl:-translate-x-1/2 xl:w-1/2" />
      </div>
      <div className="grid-cols-2 xl:grid xl:py-10 xl:px-56">
        <ContactForm />
        <section className="flex flex-col order-first gap-2 dark:text-white xl:justify-center">
          <div className="flex items-center gap-1 font-medium text-md xl:text-xl">
            {contacts[0].phoneIcon}
            <span className="text-veryDarkGrey dark:text-white">
              {contacts[0].phone}
            </span>
          </div>
          <div className="flex items-center gap-1 font-medium text-md xl:text-xl">
            {contacts[0].emailIcon}
            <span className="text-veryDarkGrey dark:text-white">
              {contacts[0].email}
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}
