import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <div className="container-button">
        <button className="btn" style={{marginRight: '25px'}}>
          <NavLink to="/about" className="link-button">About</NavLink>
        </button>
        <button className="btn">
          <NavLink to="/home" className="link-button">Home</NavLink>
        </button>
      </div> 
      <SearchBar onSearch={onSearch} />          
    </nav>
  );
}
