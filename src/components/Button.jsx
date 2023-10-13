export default function Button({ children, border = null }) {
  return (
    <button
      className={`px-8 py-2 font-bold tracking-tight bg-darkGrey bg-opacity-10 text-veryDarkGrey hover:bg-opacity-20 dark:hover:bg-opacity-90 duration-200 dark:text-white dark:bg-lightBlack dark:bg-opacity-60 xl:px-10 relative`}
    >
      {children}
      <div
        className={`absolute border-veryDarkGrey dark:border-yellowGreen   bg-transparent ${
          border === "bottom" && "bottom-0 left-0 border-b-[2px] border-l-[2px]"
        } ${
          border === "top" && "top-0 right-0 border-t-[2px] border-r-[2px]"
        } w-[30px] h-[25px]`}
      ></div>
    </button>
  );
}
