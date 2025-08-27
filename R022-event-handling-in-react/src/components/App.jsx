import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [isMouseOver, setIsMouseOver] = useState(false)

  function submitForm() {
    setHeadingText("Submitted!")
  }

  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseOut() {
    setIsMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
          style={{backgroundColor: isMouseOver && "black"}}
          onClick={submitForm}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
        Submit
      </button>
    </div>
  );
}

export default App;
