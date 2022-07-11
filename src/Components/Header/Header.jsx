import React from "react";
import "./Header.css";
import bg from "../../image/bg.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <span className="header_title2">Motorcycle Diaries</span>
      </div>
      <img src={bg} alt="backgroud" />
    </div>
  );
}

export default Header;
