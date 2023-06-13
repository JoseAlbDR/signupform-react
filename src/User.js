export default function User({ key, name }) {
  return (
    <li key={key}>
      {name}
      <span>
        <button className="remove">❌</button>
      </span>
    </li>
  );
}
