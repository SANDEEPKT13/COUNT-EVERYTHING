import React, { useState } from 'react'


export default function TextForm(props) {

const handleupClick = ()=>{
  // console.log("uppercase was clicked: "+text)
  let newText = text.toUpperCase();
  setText(newText);
}

const handleLoClick = () => {
  setText(text.toLowerCase());
}

const handleTitleClick = () => {
  let newText = text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  setText(newText);
}





const handleonChange = (event) => {
        // console.log("on change ")
        setText(event.target.value);
    }

  const [text, setText] = useState("");
  // text = "new text "; //wrong way to change the text 
  // setTexttext = "new text "; //correct way to change the text 



const charCount = text.length;

// Spaces = count of " " in text
const spaceCount = (text.match(/ /g) || []).length;

// Lines = number of newline characters + 1 (if not empty)
const lineCount = text.split("\n").length;

// Paragraphs = number of blocks separated by double newline (\n\n)
const paraCount = text.split(/\n\s*\n/).filter(p => p.trim() !== "").length;

// Words = non-empty strings separated by whitespace
const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

// Reading time
const readingTime = (0.008 * wordCount).toFixed(2);



// Styles
  const containerStyle = {
    backgroundColor: "#f0f0f0", // light gray for containers
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  };




  return (
     <>
      <div className="container" style={containerStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="mybox"
            rows="15"
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Title Case</button>
      </div>

      <div className="container my-3" style={containerStyle}>
        <h1>Your text summary</h1>
        <p>
          Characters <span className="badge bg-primary">{charCount}</span>{" "}
          Words <span className="badge bg-primary">{wordCount}</span>{" "}
          Lines <span className="badge bg-primary">{lineCount}</span>{" "}
          Spaces <span className="badge bg-primary">{spaceCount}</span>{" "}
          Paragraphs <span className="badge bg-primary">{paraCount}</span>
        </p>
        <p>Reading time <span className="badge bg-success">{readingTime} min</span></p>
      </div>


<div className="footer" style={{
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "8px"
}}>
    <p style={{margin: "5px"}}>📝 Count Everything - Analyze and transform your text easily!</p>
    <p style={{margin: "5px"}}>Made with ❤️ by Sandeep Kumar</p>
</div>
 
    </>
  );
}