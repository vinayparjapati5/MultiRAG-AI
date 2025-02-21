import React, { useEffect } from "react";
import LandingPage from "./Landing_page";
import Login from "./pages/user/login";
import SignUp from "./pages/user/register";
import './App.css';
import "./index.css"
import './Admin.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/user/profile";
import { useState } from "react";
import { auth } from "./pages/user/firebase";
import AdminPortal from "./admin";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/profile"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/" element={<LandingPage/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/AdminPortal" element={<AdminPortal/>} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;