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
    <section className="my-4 px-9">
      <div className="relative flex items-center">
        <h2 className="text-2xl font-bold tracking-tighter text-veryDarkGrey dark:text-white ">
          CONTACT
        </h2>
        <span className="h-[2px] bg-veryDarkGrey w-full absolute left-[6.9rem] dark:bg-white" />
      </div>
      <ContactForm />
      <section className="flex flex-col gap-2 dark:text-white">
        <div className="flex items-center gap-1 font-medium text-md">
          {contacts[0].phoneIcon}
          <span className="text-veryDarkGrey dark:text-white">
            {contacts[0].phone}
          </span>
        </div>
        <div className="flex items-center gap-1 font-medium text-md">
          {contacts[0].emailIcon}
          <span className="text-veryDarkGrey dark:text-white">
            {contacts[0].email}
          </span>
        </div>
      </section>
    </section>
  );
}
