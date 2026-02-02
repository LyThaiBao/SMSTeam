interface TeacherType {
  name: string;
  major: string;
}
export default function Teacher({ name, major }: TeacherType) {
  return (
    <li>
      <div>{name}</div>
      <span>{major}</span>
    </li>
  );
}
