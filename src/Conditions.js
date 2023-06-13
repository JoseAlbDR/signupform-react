export default function Conditions({ children, condition }) {
  return (
    <p className={condition ? "green" : "red"}>
      {condition ? "✔" : "❌"} {children}
    </p>
  );
}
