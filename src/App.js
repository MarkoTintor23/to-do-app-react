import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Navigation from "./Partials/Navigation";
import { createContext, useReducer } from "react";
import { getUserInitialData, userReducer } from "./Reducers/User";

export const userContext = createContext();
function App() {
  const [userState, userDispatch] = useReducer(
    userReducer,
    getUserInitialData()
  );
  return (
    <BrowserRouter>
      <userContext.Provider value={{ userState, userDispatch }}>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
