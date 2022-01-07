import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleClearText = () => {
    
    setText("");
    props.showAlert("Text cleared", "success")
  };
  const handleLoClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  
  const handleCopy = () => {
    var txt = document.getElementById('mybox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied successfully", "success")
    
  };
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces successfully", "success")
  }
  
  const [text, setText] = useState("");
  return (
    <div>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h4>{props.heading}</h4>
          </label>
          <textarea
            style={{backgroundColor: props.mode === 'light'?'white':'pink'}}
            className="form-control"
            id="mybox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 mt-sm-2 mt-md-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <div className="container my-3">
          <h5>Your Text Summary</h5>
          <p> {text.split(" ").length} words and {text.length} characters</p>
          <p> Time to read these words in Minutes = {0.08 * text.split(" ").length}</p>
          <h5>Preview</h5>
          <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
      </div>
    </div>
  );
}
