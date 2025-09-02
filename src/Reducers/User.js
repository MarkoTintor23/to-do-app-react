export const initialUserData = {
  username: null,
  isLoggedIn: false,
};

export const getUserInitialData = () => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    return JSON.parse(userData);
  }
  return initialUserData;
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};
