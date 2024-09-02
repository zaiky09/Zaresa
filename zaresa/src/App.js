import React from 'react';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
