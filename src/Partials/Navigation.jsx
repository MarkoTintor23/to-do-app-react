import { useContext } from "react";
import { userContext } from "../App";

const Navigation = () => {
  const logoutUser = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };
  const { userState } = useContext(userContext);
  return (
    <>
      {userState.isLoggedIn && (
        <a href="logout" onClick={logoutUser}>
          Logout
        </a>
      )}
      {!userState.isLoggedIn && <a href="login">login</a>}
    </>
  );
};

export default Navigation;
