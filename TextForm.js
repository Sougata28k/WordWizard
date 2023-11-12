import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
       
    }
    const handleOnClick3 = () => {
        let newText = '';
        setText(newText);
      };
      
    const handleOnClick2=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const CapitalizeFirstLetter = (str) => {
        return str
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join the words back into a string
      };
      const handleOnClick4 =()=>{
        let newText = CapitalizeFirstLetter(text);
        setText(newText);
      }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
  const [text, setText] = useState("Enter your text here");
  return (
    <div>
      <h1> {props.title}</h1>
      <div class="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text}  rows="8"></textarea>
      </div>
      <div className="container my-3 ">
      <button className="btn btn-primary" onClick={handleOnClick} >Click to Uppercase</button>
      
      <button className="btn btn-primary mx-3"  onClick={handleOnClick2} >Click to Lowercase</button>
      <button className="btn btn-primary "  onClick={handleOnClick4} >Click to Capitalize First Letter</button>   
      <button className="btn btn-danger mx-3 "  onClick={handleOnClick3} >Clear</button>
      
      
      </div>
    </div>
  );
}
