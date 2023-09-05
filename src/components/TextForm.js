import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    //  console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extraspaces", "success");
  };

  const handleClear = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared textarea!", "success");
  };

  const handleOnChange = (event) => {
    //  console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1  my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extraspaces
        </button>
        <button className="btn btn-primary mx-1  my-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>YOUR TEXT SUMMARY</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
