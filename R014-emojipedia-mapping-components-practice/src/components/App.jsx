import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiRecord){
  return(
    <Entry
      key={emojiRecord.id}
      emoji={emojiRecord.emoji}
      name={emojiRecord.name}
      meaning={emojiRecord.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
