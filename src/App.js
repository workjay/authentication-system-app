import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";
import SignupForm from "./Containers/SignupForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" exact element={<Login />} />
        <Route
          path="/customer-signup"
          exact
          element={<SignupForm role="customer" />}
        />
        <Route
          path="/admin-signup"
          exact
          element={<SignupForm role="admin" />}
        />
      </Routes>
    </div>
  );
}

export default App;
