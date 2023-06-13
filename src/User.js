export default function User({ id, name, onRemoveUser }) {
  return (
    <li>
      {name}
      <span>
        <button className="remove" onClick={() => onRemoveUser(id, name)}>
          ❌
        </button>
      </span>
    </li>
  );
}
