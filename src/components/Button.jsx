export default function Button({
  children,
  px = 8,
  py = 2,
  border = null,
  borderWidth = "30px",
  borderHeight = "25px",
}) {
  return (
    <button
      className={`px-8 py-2 font-bold tracking-tight bg-darkGrey bg-opacity-10 text-veryDarkGrey dark:text-white dark:bg-lightBlack dark:bg-opacity-60 xl:px-${px} relative`}
    >
      {children}
      <div
        className={`absolute border-veryDarkGrey dark:border-yellowGreen   bg-transparent ${
          border === "bottom" && "bottom-0 left-0 border-b-[2px] border-l-[2px]"
        } ${
          border === "top" && "top-0 right-0 border-t-[2px] border-r-[2px]"
        } w-[${borderWidth}] h-[${borderHeight}]`}
      ></div>
    </button>
  );
}
