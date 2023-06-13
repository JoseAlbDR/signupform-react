import "./App.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [check, setCheck] = useState(false);

  function handleSetCheck(check) {
    setCheck(check);
  }
  return (
    <div className="container">
      <h1>Sign Up</h1>
      {!check && <Form onSetCheck={handleSetCheck}></Form>}
      {check && (
        <>
          <h1 className="green">Success!!!</h1>
          <button onClick={() => setCheck((check) => !check)}>Back</button>
        </>
      )}
    </div>
  );
}

export default App;
