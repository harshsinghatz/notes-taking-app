import React, { useState, useEffect, useRef } from "react";
import ColorOptions from "./ColorOptions";
import "../css/AddNote.css";

const colors = ["red", "blue", "green"];
const AddNote = ({ addNote, note, closeModal }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [body, setBody] = useState(note ? note.body : "");
  const [showColor, setShowColor] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    note ? note.color : "white"
  );
  const buttonRef = useRef(null);
  const colorRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = function (event) {
      if (
        (colorRef.current && colorRef.current.contains(event.target)) ||
        event.target === buttonRef.current
      ) {
        return;
      }
      setShowColor(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [colorRef, buttonRef]);
  const onSave = () => {
    if (title.trim().length === 0 && body.trim().length === 0) return;
    addNote({ title, body, selectedColor, note });
    setTitle("");
    setBody("");
    setSelectedColor("white");
    if (closeModal) closeModal();
  };

  return (
    <div className={`add--note note--color--${note?.color}`}>
      <input
        className="title-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="body-input"
        type="textarea"
        placeholder="Take a Note..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <div className="options">
        <button className="btn btn--save" onClick={onSave}>
          Save
        </button>
        <button
          ref={buttonRef}
          className="btn btn--color"
          onClick={() => setShowColor(!showColor)}
        >
          Color
        </button>
        {showColor ? (
          <div>
            <ColorOptions
              colorRef={colorRef}
              colors={colors}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default AddNote;
