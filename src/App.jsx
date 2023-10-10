import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <Main>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </Main>
  );
}
