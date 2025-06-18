// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Donate from './pages/donate';
import Receive from './pages/receive';
import SignupLogin from './pages/SignupLogin';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/signup" element={<SignupLogin />} />
        <Route path="/login" element={<SignupLogin />} />
      </Routes>
    </Router>
  );
}

export default App;





