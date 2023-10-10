export default function Skill({ skill }) {
  const { icon, name } = skill;
  return (
    <li className="flex flex-col items-center justify-center text-center">
      {icon}
      <span>{name}</span>
    </li>
  );
}
