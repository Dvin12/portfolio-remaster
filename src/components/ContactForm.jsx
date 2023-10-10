export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6 py-8">
      <input
        type="text"
        placeholder="Your name"
        className="w-full p-4 text-xl font-bold bg-darkGrey bg-opacity-10 placeholder:text-veryDarkGrey placeholder:text-opacity-70 text-veryDarkGrey dark:text-white dark:bg-lightBlack dark:bg-opacity-70 dark:placeholder:text-white dark:placeholder:text-opacity-60"
      />
      <input
        type="text"
        placeholder="Your email address"
        className="w-full p-4 text-xl font-bold bg-darkGrey bg-opacity-10 placeholder:text-veryDarkGrey placeholder:text-opacity-70 text-veryDarkGrey dark:text-white dark:bg-lightBlack dark:bg-opacity-70 dark:placeholder:text-white dark:placeholder:text-opacity-60"
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Your message"
        className="w-full p-4 text-xl font-bold bg-darkGrey bg-opacity-10 placeholder:text-veryDarkGrey placeholder:text-opacity-70 text-veryDarkGrey dark:text-white dark:bg-lightBlack dark:bg-opacity-70 dark:placeholder:text-white dark:placeholder:text-opacity-60"
      ></textarea>
    </form>
  );
}
