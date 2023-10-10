export default function Skill({ skill }) {
  const { icon, name } = skill;
  return (
    <li className="flex flex-col items-center justify-center text-center ">
      {icon}
      <span className="text-veryDarkGrey">{name}</span>
    </li>
  );
}
