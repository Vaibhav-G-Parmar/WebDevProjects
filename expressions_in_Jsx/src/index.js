import React from "react";
import ReactDOM from "react-dom";

//JSX lets us insert HTML into JavaScript files.
//But it also lets us insert JavaScript into that HTML, using special syntax of {}.
//however we cannot write JavaScript statements, however it allows JavaScript expressions 

//expression: means it will evaluate to a value
//statements: like if statement, which asks computer to process something rather than evaluating at the end to a value 

//template literal 

const fName = "John";
const lName = "Doe";
//const num = "7";

ReactDOM.render(
    <>
        <h1>Hello {fName + " " + lName}!</h1>
        <br />
        <p>Printing heading by using template literal.</p>
        <h1>Hello {`${fName} ${lName}`}!</h1>
        <p>Your lucky number is {Math.floor(Math.random() * 10)}.</p>
    </>,
    document.getElementById("root")
);
