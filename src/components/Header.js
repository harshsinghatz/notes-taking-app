import React from "react";
import "../css/Header.css";
import NotesIcon from "@mui/icons-material/Notes";

const Header = ({ setShowSidebar }) => {
  return (
    <div className="header">
      <NotesIcon className="logo" onClick={setShowSidebar} />
    </div>
  );
};

export default Header;
