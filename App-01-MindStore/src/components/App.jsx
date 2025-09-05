//Author: Vaibhav Parmar

import React from "react";
import Header from "./Header";
import Note from "./Note";
import notesArray from "../notes";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNote from "./CreateNote";

function App() {
  // Notes state
  const [notes, setNotes] = React.useState(notesArray);

  // Theme state
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  function addNote(newNote) {
    setNotes(prevNotes => [
      ...prevNotes,
      { ...newNote, id: prevNotes.length + 1 }
    ]);
  }

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>

      {/* Header Component to display the app title and toggle theme button */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* CreateNote Component to add new notes */}
      <CreateNote onAdd={addNote} theme={theme} />

      <div className="container" style={{ minHeight: '380px' }}>
        <div className="notes-grid">
          {/* Notes Section */}
          {notes.map(noteRecord => (
            <Note 
              key={noteRecord.id}
              title={noteRecord.title}
              content={noteRecord.content}
            />
          ))}
        </div>
      </div>

      {/* Footer Component */}
      <footer className={`footer-modern ${theme === 'dark' ? 'footer-dark' : 'footer-light'}`} style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} Vaibhav Parmar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;