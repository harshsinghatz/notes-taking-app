import React from "react";
import "../css/Modal.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal">
      <CancelIcon className="modal--cancel" onClick={closeModal} />
      <div className="modal--container">{children}</div>
    </div>
  );
};

export default Modal;
