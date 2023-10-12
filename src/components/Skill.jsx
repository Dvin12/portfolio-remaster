export default function Skill({ skill }) {
  const { icon, name } = skill;
  return (
    <li className="flex flex-col items-center justify-center text-center dark:text-white dark:text-opacity-70 xl:text-xl">
      {icon}
      <span className="text-veryDarkGrey dark:text-white">{name}</span>
    </li>
  );
}
