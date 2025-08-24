import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
    color: "red",
    fontSize: "36px",
    borderTop: "5px dotted Blue",  
    borderBottom: "5px dotted DeepPink",  
    borderLeft: "5px dotted DarkGreen",  
    borderRight: "5px dotted FireBrick",  
    fontFamily: "Comic Sans MS"
}

//inline styling 
//suggested way to use css is through className 
//but this can be utilized in case of needs
//ReactDOM.render(<h1 style={{color : "red"}}>Hello World!</h1>, document.getElementById("root"));

//with inline styling can change the stype on the go
customStyle.color = "coral";

ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));
