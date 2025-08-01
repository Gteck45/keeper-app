import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import "./styles1.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.title != "" && newNote.content != "") {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
    
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App;
