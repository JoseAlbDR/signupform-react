import "./App.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);

  function handleSetSuccess(success) {
    setSuccess(success);
  }
  return (
    <div className="container">
      <h1>Sign Up</h1>
      {!success && <Form onSetSuccess={handleSetSuccess}></Form>}
      {success && (
        <>
          <h1 className="green">Success!!!</h1>
          <button onClick={() => setSuccess((success) => !success)}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default App;
