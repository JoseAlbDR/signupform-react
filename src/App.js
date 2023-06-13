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

  function handleRemoveUser(id, name) {
    window.confirm(`Are you sure you want to remove ${name}`) &&
      setUsers((users) => users.filter((user) => user.id !== id));
  }

  function handleCheckUserName(name) {
    return users.some((user) => user.name === name);
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      {!success && (
        <Form
          success={success}
          onSetSuccess={handleSetSuccess}
          onAddUser={handleAddUser}
          onCheckUserName={handleCheckUserName}
        ></Form>
      )}
      {/* Successfull Sign up */}
      {success && (
        <>
          <h1 className="green">Success!!!</h1>
          {users.length > 0 && (
            <div className="userlist">
              <h3>User List</h3>
              <ul>
                {users.map((user) => (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    onRemoveUser={handleRemoveUser}
                  />
                ))}
              </ul>
            </div>
          )}
          {/* Back to Sign up form */}
          <button onClick={() => setSuccess((success) => !success)}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default App;
