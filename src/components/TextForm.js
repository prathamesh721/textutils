import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h4>{props.heading}</h4>
          </label>
          <textarea
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
        <div className="container my-3">
          <h5>Your Text Summary</h5>
          <p> {text.split(" ").length} words and {text.length} characters</p>
          <p> Time to read these words in Minutes = {0.08 * text.split(" ").length}</p>
          <h5>Preview</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
