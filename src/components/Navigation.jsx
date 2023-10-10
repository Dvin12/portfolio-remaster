import MobileNav from "./MobileNav";

export default function Navigation({ setTheme, theme }) {
  return (
    <>
      <MobileNav setTheme={setTheme} theme={theme} />
    </>
  );
}
