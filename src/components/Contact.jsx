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
        <h2 className="text-2xl font-bold tracking-tighter ">CONTACT</h2>
        <span className="h-[2px] bg-veryDarkGrey w-full absolute left-[6.9rem]" />
      </div>
      <ContactForm />
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          {contacts[0].phoneIcon}
          <span>{contacts[0].phone}</span>
        </div>
        <div className="flex items-center gap-1">
          {contacts[0].emailIcon}
          <span>{contacts[0].email}</span>
        </div>
      </section>
    </section>
  );
}
