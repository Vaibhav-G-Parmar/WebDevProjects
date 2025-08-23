//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let headingText = "";
const customStyle = {
    color: "black"
}

const now = new Date();
const hours = now.getHours(); // Returns the hour (0-23)

if (hours < 12) {
    headingText = "Good Morning!";
    customStyle.color = "red";
} else if (hours >= 12 && hours < 18) {
    headingText = "Good Afternoon!";
    customStyle.color = "green";
} else if (hours >= 18 && hours < 25){
    headingText = "Good Evening!";
    customStyle.color = "blue";
}

ReactDOM.render(
    <div>
        <h1 className={"heading"} style={customStyle}>{headingText}</h1>
    </div>    
    , document.getElementById("root")
)