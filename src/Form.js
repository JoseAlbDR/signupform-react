import { useState } from "react";
import Condition from "./Condition";
export default function Form({
  success,
  onSetSuccess,
  onAddUser,
  onCheckUserName,
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function hasLowerCase(str) {
    if (str === "") return false;
    return str !== str.toUpperCase();
  }

  function hasUpperCase(str) {
    if (str === "") return false;
    return str !== str.toLowerCase();
  }

  function hasNumber(str) {
    return /\d/.test(str);
  }

  function hasSymbol(str) {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(str);
  }
  const userLength = userName.length;
  const userMin = userLength >= 6;
  const userMax = userMin && userLength <= 10;
  const passMin = password.length >= 10;
  const upperCase = hasUpperCase(password);
  const lowerCase = hasLowerCase(password);
  const number = hasNumber(password);
  const symbol = hasSymbol(password);
  const exist = onCheckUserName(userName);

  function handleSubmit(e) {
    e.preventDefault();

    const successLogin =
      userMin &&
      userMax &&
      passMin &&
      upperCase &&
      lowerCase &&
      number &&
      symbol &&
      !exist;

    if (successLogin) {
      const user = {
        id: crypto.randomUUID(),
        name: userName,
        password: password,
      };
      onSetSuccess(true);
      onAddUser(user);
    } else {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="username">
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="conditions">
        <ul>
          <Condition condition={!exist}>
            Name {!exist ? "avaiable" : "already exist"}
          </Condition>
          <Condition condition={userMin}>Min 6 chars</Condition>
          <Condition condition={userMax}>Max 10 chars</Condition>
        </ul>
      </div>
      <div className="password">
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="conditions">
        <ul>
          <Condition condition={passMin}>Min 10 chars</Condition>
          <Condition condition={upperCase}>
            Contains one UpperCase Letter
          </Condition>
          <Condition condition={lowerCase}>
            Contains one LowerCase Letter
          </Condition>
          <Condition condition={number}>Contains one Number</Condition>
          <Condition condition={symbol}>Contains one Symbol</Condition>
        </ul>
      </div>
      <button>Sign Up</button>
    </form>
  );
}
