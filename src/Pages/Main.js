import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Main.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Logout from './Logout';


function App() {
  return (
    <Router>
      <div className="jig">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
