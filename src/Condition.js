export default function Condition({ children, condition }) {
  return (
    <li className={condition ? "green" : "red"}>
      {condition ? "✔" : "❌"} {children}
    </li>
  );
}
