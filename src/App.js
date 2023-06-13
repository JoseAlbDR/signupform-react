import "./App.css";
import Form from "./Form";
import { useState } from "react";
import User from "./User";

function App() {
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);

  function handleSetSuccess(success) {
    setSuccess(success);
  }

  function handleAddUser(user) {
    setUsers((users) => [...users, user]);
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      {!success && (
        <Form onSetSuccess={handleSetSuccess} onAddUser={handleAddUser}></Form>
      )}
      {success && (
        <>
          <h1 className="green">Success!!!</h1>
          <ul>
            {users.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
          <button onClick={() => setSuccess((success) => !success)}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default App;
