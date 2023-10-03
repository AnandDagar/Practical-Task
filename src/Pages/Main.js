import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Main.css";
import Home from "./Home";
import MyAccount from "./MyAccount";

function App() {
  return (
    <Router>
      <div className="jig">
        <img
          className="logo90"
          src="https://themebing.com/wp/tijarah/wp-content/uploads/2020/04/logo.png"
          alt=""
        />
        <nav className="navbar">
          <Link className="home" to="/">
            Home
          </Link>

          <Link className="acc" to="/My Account">
            My Account
          </Link>
          <img
            className="user"
            src="https://themebing.com/wp/tijarah/wp-content/themes/tijarah/assets/images/user.png"
            alt=""
          />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route className="acc" path="/My Account" element={<MyAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
