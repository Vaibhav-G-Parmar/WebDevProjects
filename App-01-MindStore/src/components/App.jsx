//Author: Vaibhav Parmar

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header/>
      {/* Map through notes array and render Note components */}
      {notes.map(noteRecord => (
        <Note 
          key={noteRecord.id}
          title={noteRecord.title}
          content={noteRecord.content}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;