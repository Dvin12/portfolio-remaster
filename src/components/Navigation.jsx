import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation({ setTheme, theme }) {
  function handleTheme() {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }
  return (
    <>
      <MobileNav handleTheme={handleTheme} theme={theme} />
      <DesktopNav handleTheme={handleTheme} theme={theme} />
    </>
  );
}
