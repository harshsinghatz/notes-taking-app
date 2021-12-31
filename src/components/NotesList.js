import React from "react";
import Note from "./Note.js";
import "../css/NotesList.css";

const NotesList = ({ notes, addPin, deleteNote, addNote }) => {
  return (
    <div className="notes-list">
      {notes
        ? notes.map((note) => (
            <Note
              note={note}
              setPin={addPin}
              key={note.id}
              deleteNote={deleteNote}
              addNote={addNote}
            />
          ))
        : null}
    </div>
  );
};

export default NotesList;
