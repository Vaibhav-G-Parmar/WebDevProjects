import React from "react";
import ReactDOM from "react-dom/client";

//ReactDOM.render(WHAT TO RENDER, WHERE TO RENDER);

//ReactDOM.render(<h1>Hello from React</h1>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello from React</h1>);