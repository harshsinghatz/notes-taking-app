import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (!savedNotes) return;
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = ({ title, body, selectedColor, note }) => {
    if (note) {
      note.body = body;
      note.title = title;
      note.color = selectedColor;
      const newNotes = notes.filter((newNote) => note.id !== newNote.id);
      setNotes([note, ...newNotes]);
      return;
    }
    const newNotes = [
      ...notes,
      {
        id: nanoid(),
        color: selectedColor,
        title,
        body,
        isPinned: false,
        tags: [],
      },
    ];
    setNotes(newNotes);
  };
  const deleteNote = (deletedNote) => {
    const newNotes = notes.filter((note) => note.id !== deletedNote.id);
    setNotes(newNotes);
  };
  const addPin = (id, status) => {
    const newNotes = notes.filter((note) => {
      if (note.id === id) {
        note.pinned = status;
      }
      return true;
    });
    setNotes(newNotes);
  };
  const onClickSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <React.Fragment>
      <Header setShowSidebar={onClickSidebar} />
      <div className="container">
        <AddNote addNote={addNote} />
        <p className="pinned--heading">Pinned :</p>
        {
          <NotesList
            notes={notes.filter((note) => note.pinned)}
            deleteNote={deleteNote}
            addPin={addPin}
            addNote={addNote}
          />
        }
        <p className="others--heading">Others :</p>
        <NotesList
          notes={notes.filter((note) => !note.pinned)}
          deleteNote={deleteNote}
          addPin={addPin}
          addNote={addNote}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
