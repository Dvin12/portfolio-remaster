import Introduction from "./Introduction";
import Navigation from "./Navigation";

export default function Header({ setTheme, theme }) {
  return (
    <header>
      <Navigation setTheme={setTheme} theme={theme} />
      <Introduction />
    </header>
  );
}
