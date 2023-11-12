import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TextForm from './Components/TextForm';



function App() {
  return (
    <>
    <div className='container my-3'>
      <TextForm title ="Write your text here..."/>
      
      </div>
    </>
  );
}

export default App;