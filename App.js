import './App.css';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [txt, setTxt] = useState('Enable Dark Mode');
  const [clr, setClr] = useState('dark');
  const [txtArea, settxtArea] = useState('light');
  const [txtClr, settxtClr] = useState('black');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

    setTxt((prevTxt) => (prevTxt === 'Enable Dark Mode' ? 'Disable Dark Mode' : 'Enable Dark Mode'));

    if (clr === 'dark') {
      setClr('light');
    } else {
      setClr('dark');
    }

    if (txtArea === 'light') {
      settxtArea('dark');
      settxtClr('light');
    } else {
      settxtArea('light');
      settxtClr('dark');
    }
  };

  return (
   
    <div className="App">
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar about="About Us" title="WordWizard" mode={mode} toggleMode={toggleMode} clr={clr} txt={txt} />
              <TextForm title="WordWizard" txtArea={txtArea} txtClr={txtClr} />
            </>
          }
        />
  
        <Route path="/About" element={<>
          <Navbar about="About Us" title="WordWizard" mode={mode} toggleMode={toggleMode} clr={clr} txt={txt} />
        <About /></>} />
      
      </Routes>
    </Router>
    <footer className="footer fixed-bottom">
  <div className="container text-center">
    <p>&copy; {new Date().getFullYear()} WordWizard. All Rights Reserved.</p>
  </div>
</footer>
  </div>
  

    
  );
}

export default App;

