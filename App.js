import './App.css';
import React, { useState } from 'react';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';



function App() {
 
  const [mode, setMode] = useState('light');
  const [txt, setTxt] = useState('Enable Dark Mode');
  const [clr, setClr] = useState('dark');
  const [txtArea, settxtArea] = useState('light');
  const[txtClr, settxtClr] = useState('black');
  const toggleMode = () => {
    
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    
    setTxt((prevTxt) => (prevTxt === 'Enable Dark Mode' ? 'Disable Dark Mode' : 'Enable Dark Mode'));
    if(clr==='dark'){
      setClr('light');
      
    }
    else{
      setClr('dark');
      
    }
    if(txtArea==='light'){
      settxtArea('dark');
      settxtClr('light')
    }
    else{
      settxtArea('light');
      settxtClr('dark');
    }
   
    
  };
  
    return (
      <>
        <Navbar about="About Us" title="WordWizard" mode={mode} toggleMode={toggleMode}  clr = {clr} txt={txt}/>
        <TextForm title="WordWizard" txtArea={txtArea} txtClr={txtClr}/>
      </>
    );
  }
  


export default App;