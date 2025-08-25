import React, {useState} from "react";

function App() {

  setInterval(udpateTime, 1000);

  var currentTime = new Date().toLocaleTimeString()
  const [ time, setTime ] = useState(currentTime)
  console.log(time)

  function udpateTime() {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={udpateTime}>Get Time</button>
    </div>
  );
}

export default App;
