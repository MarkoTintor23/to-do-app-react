import { useState } from "react";
import users from "../Data/Users.json";

console.log(users);

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const checkCredentials = () => {
    if (
      username === null ||
      password === null ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      setLoginError("Wrong credentials");
    }
    let foundUser = false;
    users.forEach((user, index) => {
      if (user.username === username && user.password === password) {
        foundUser = true;
        setLoginError(null);
      }
    });
    if (!foundUser) {
      setLoginError("wrong credentials");
    }
  };
  return (
    <>
      <p>{loginError}</p>
      <form>
        <input
          onInput={(e) => setUsername(e.currentTarget.value)}
          placeholder="Enter your username"
          type="text"
        />
        <input
          onInput={(e) => setPassword(e.currentTarget.value)}
          placeholder="Enter your password"
          type="password"
        />
        <button type="button" onClick={checkCredentials}>
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
