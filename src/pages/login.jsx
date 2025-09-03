import { useEffect, useReducer, useState } from "react";
import users from "../Data/Users.json";
import { getUserInitialData, userReducer } from "../Reducers/User";

console.log(users);

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [userState, userDispatch] = useReducer(
    userReducer,
    getUserInitialData()
  );
  console.log(userState);

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
        userDispatch({ type: "SET_USERNAME", payload: username });
        userDispatch({ type: "SET_LOGGED_IN", payload: true });
        userDispatch({ type: "SET_LOGIN_TIME", payload: new Date().getTime() });
      }
    });
    if (!foundUser) {
      setLoginError("wrong credentials");
    }
  };

  useEffect(() => {
    if (userState.isLoggedIn) {
      localStorage.setItem("userData", JSON.stringify(userState));
    }
  }, [userState]);
  return (
    <>
      {!userState.isLoggedIn && (
        <form>
          <p>{loginError}</p>
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
      )}
    </>
  );
};
export default Login;
