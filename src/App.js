import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProvider from "./providers/UserProvider";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from "./components/Gallery"
import Team from "./components/Team"

function App() {
  return (
    <UserProvider>
      <Router>
      <Navbar />
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/register' element={<Login />} />
            <Route path='/team' element={<Team />} />
            <Route path='/gallery' element={<Gallery />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;