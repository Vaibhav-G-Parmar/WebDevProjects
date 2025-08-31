//Author: Vaibhav Parmar

import React from "react";
import Header from "./Header";
import Note from "./Note";
import notesArray from "../notes";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNote from "./CreateNote";

function App() {

  const [notes, setNotes] = React.useState(notesArray);

  function addNote(newNote) {
      setNotes(prevNotes => [
          ...prevNotes,
          { ...newNote, id: prevNotes.length + 1 }
      ]);
  }

  return (
    <div>
      <Header/>
      <CreateNote onAdd={addNote}/>
      {/* Map through notes array and render Note components */}
      <div className="container">
        <div className="notes-grid">
            {notes.map(noteRecord => (
                <Note 
                    key={noteRecord.id}
                    title={noteRecord.title}
                    content={noteRecord.content}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;