import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
  event.preventDefault(); 


  if (note.title.trim().length < 3 || note.content.trim().length < 3) {
    alert("Both title and content must be at least 3 characters long.");
    return; 
  }


  props.onAdd(note);

  // Clear the form
  setNote({
    title: "",
    content: "",
  });
}


  return (
    <div className="note-form">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Tilte"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <div className="button-container">
          <button onClick={submitNote}>Add</button>
        </div>
      </form>
    </div>
  );
}
export default CreateArea;
