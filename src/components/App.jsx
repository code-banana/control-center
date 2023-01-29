import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Banana from './Banana';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="track" element={<Banana/>} />
          <Route path="login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
  );
}

export default App;