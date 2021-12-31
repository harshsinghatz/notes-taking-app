import React, { useRef, useEffect, useState } from "react";
import "../css/Note.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "./Modal";
import AddNote from "./AddNote";

const Note = ({ note, setPin, deleteNote, addNote }) => {
  const noteRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const onNoteDelete = (e) => {
    deleteNote(note);
  };
  const editNote = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {}, [noteRef]);
  return (
    <React.Fragment>
      <div className={`note note--color--${note.color}`} ref={noteRef}>
        <div className="note--header">
          <h2 className="note--title">{note.title}</h2>
          <PushPinIcon
            className={`pin--icon ${note.pinned ? "pin--active" : ""} hide`}
            onClick={() => {
              setPin(note.id, !note.pinned);
            }}
          />
        </div>
        <div className="note--body">{note.body}</div>
        <div className="note--footer .hide">
          <DeleteIcon className="delete--icon" onClick={onNoteDelete} />
          <EditIcon className="edit--icon" onClick={editNote} />
        </div>
      </div>
      {showModal ? (
        <Modal closeModal={closeModal}>
          <AddNote note={note} addNote={addNote} closeModal={closeModal} />
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default Note;
