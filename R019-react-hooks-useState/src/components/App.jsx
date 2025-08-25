import React, {useState} from "react";

function App() {

  const [ count, setCount ] = useState(0); 
  //it is an example of array destructuring 

  function increase(){
    setCount(count + 1)
  }  
  function decrease(){
    setCount(count - 1)
  }

  return(
    <>
    <div>
        <h2>Counter</h2>
    </div> 
    <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
    </>
  )
}

export default App;
