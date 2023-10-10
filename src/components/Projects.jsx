import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
} from "react-icons/bi";
import Project from "./Project";

const projects = [
  {
    name: "TastyTreasure",
    image: "./images/TastyTreasure.jpg",
    info: "Recipe app that allows users to search for recipes, view them and save them for later. The app is using Spoonacular API to fetch all the data.",
    builtWith: [<BiLogoTailwindCss size={30} />, <BiLogoReact size={30} />],
    live: "https://tasty-treasure.netlify.app/",
    github: "https://github.com/Dvin12/tasty-treasure",
  },

  {
    name: "LapLense",
    image: "./images/Ecommerce.jpg",
    info: "E-commerce app where users can browse products, add them to their cart, and easily adjust the quantity of each item.",
    builtWith: [<BiLogoTailwindCss size={30} />, <BiLogoReact size={30} />],
    live: "https://dvin12.github.io/ecommerce/",
    github: "https://github.com/Dvin12/ecommerce",
  },

  {
    name: "PopCornDB",
    image: "./images/PopcornDB.jpg",
    info: "The app allows to see popular movies at the given time. It also allows to search for any movie  and see its overview and the rating.",
    builtWith: [<BiLogoSass size={30} />, <BiLogoJavascript size={30} />],
    live: "https://dvin12.github.io/PopCorn_DB/",
    github: "https://github.com/Dvin12/PopCorn_DB",
  },

  {
    name: "Weather App",
    image: "./images/WeatherApp.jpg",
    info: "The app allows the user to search for any city in the world and see what's the current weather in there.",
    builtWith: [<BiLogoJavascript size={30} />],
    live: "https://dvin12.github.io/WeatherApp/",
    github: "https://github.com/Dvin12/WeatherApp",
  },

  {
    name: "To-Do App",
    image: "./images/TodoApp.jpg",
    info: "The app allows the user organise their daily tasks, cross them and delete once finished. It also saves the data in the local storage.",
    builtWith: [<BiLogoJavascript size={30} />],
    live: "https://dvin12.github.io/ToDoList/",
    github: "https://github.com/Dvin12/ToDoList",
  },
];

export default function Projects() {
  return (
    <section>
      <div className="relative flex items-center px-9">
        <h2 className="text-2xl font-bold tracking-tighter ">PROJECTS</h2>
        <span className="h-[2px] bg-veryDarkGrey w-full absolute left-[9.55rem]" />
      </div>
      <div className="flex flex-col my-10">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
