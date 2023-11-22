import React, { useState } from "react"
const TextForm=(props)=> {
    
        const handleHover = () => {
          console.log('Click to capitalize the first word of each sentence!'); // You can replace this with your own logic
        };
        const handleHover2 = () => {
            console.log('Click to capitalize the first word of each word!'); // You can replace this with your own logic
          };
          const handleHover3 = () => {
            console.log('Click to upper case the words!'); // You can replace this with your own logic
          };
          const handleHover4 = () => {
            console.log('Click to lower case the words!'); // You can replace this with your own logic
          };
    const capitalizeEachSentence = (str) => {
        return str
          .split(/\.\s+/) // Split the text into an array of sentences
          .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
          .join(". "); // Join the sentences back into a string
      };
      const handleOnClick5=()=>{
        let newText = capitalizeEachSentence(text);
        setTextHistory([...textHistory, text]);
        setText(newText);
       
    }
    const handleOnClick=()=>{
        let newText = text.toUpperCase();
        setTextHistory([...textHistory, text]);
        setText(newText);
       
    }
    const handleOnClick3 = () => {
        let newText = '';
        setTextHistory([...textHistory, text]);
        setText(newText);
      };
     
      
    const handleOnClick2=()=>{
        let newText = text.toLowerCase();
        setTextHistory([...textHistory, text]);
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
        setTextHistory([...textHistory, text]);
        setText(newText);
        
      }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const handleUndo =()=>{
        if (textHistory.length > 0) {
            const previousText = textHistory.pop();
            setText(previousText);
            setTextHistory([...textHistory]);
          }
    }
    // const [myStyle, setMystyle] = useState({
    //   color: 'black',
    //   backgroundColor: 'white',
    // });
    // const [btnText, setbtnText] = useState( "Enable Dark Mode" );
    
    // const modeChange = () => {
    //   if (myStyle.color === 'black') {
    //     setMystyle({
    //       color: 'white',
    //       backgroundColor: 'black',
    //     });
    //     setbtnText("Disable Dark Mode");
    //   } else {
    //     setMystyle({
    //       color: 'black',
    //       backgroundColor: 'white',
    //     });
    //     setbtnText("Enable Dark Mode");
    //   }
    // };
  
  const [text, setText] = useState("Enter your text here");
  const [textHistory, setTextHistory] = useState([]);
  
    // Define a styles object
    // const styles = {
    //   footer: {
    //     position: 'fixed',
    //     bottom: 0,
    //     left: 0,
    //     width: '100%',
    //     backgroundColor: '#f8f8f8',
    //     textAlign: 'center',
    //     padding: '10px',
    //   },
    // };
  
  return (
    <div >
    <div className="container my-3">
    
      {/* <h2> {props.title}</h2> */}
      
      <div className="mb-3 my-3" >
        <textarea className={`form-control bg-${props.txtArea} text-${props.txtClr}`}  id="myBox" onChange={handleOnChange} value={text}  rows="11"></textarea>
      </div>
      <div className="container my-3 ">
      <button className="btn btn-primary" onClick={handleOnClick} onMouseEnter={handleHover3}
      title="Click to upper case the words!" >Uppercase</button>
      
      <button className="btn btn-primary mx-3"  onClick={handleOnClick2} onMouseEnter={handleHover4}
      title="Click to lower case the words!">Lowercase</button>
      <button className="btn btn-primary "  onClick={handleOnClick4} onMouseEnter={handleHover2}
      title="Click to capitalize the first letter of each word!">Title Case</button>  
      <button className="btn btn-primary mx-3"  onClick={handleOnClick5} onMouseEnter={handleHover}
      title="Click to capitalize the first word of each sentence!">Sentence Case</button>
      <button className="btn btn-secondary " onClick={handleUndo}>
          Undo
        </button>    
      <button className="btn btn-danger mx-3 "  onClick={handleOnClick3} >Clear</button>
      
      {/* <div className="container my-3"> */}

      <h3 className="my-3">Text Summary</h3>
       <p> {text.split(" ").length} words and {text.length} characters </p>
       {/* </div> */}
       
      
      </div>
      <footer className="footer fixed-bottom">
  <div className="container text-center">
    <p>&copy; {new Date().getFullYear()} WordWizard. All Rights Reserved.</p>
  </div>
</footer>

    </div>
    
    </div>
    
  );
  }

  export default TextForm