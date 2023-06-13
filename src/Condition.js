export default function Condition({ children, condition }) {
  return (
    <p className={condition ? "green" : "red"}>
      {condition ? "✔" : "❌"} {children}
    </p>
  );
}
