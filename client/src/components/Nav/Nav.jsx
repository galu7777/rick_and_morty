import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

export default function Nav({ onSearch, setAccess }) {
 
  return (
    <nav>
      <div className="container-button">
        <button className="btn-nav" style={{marginRight: '25px'}}>
          <NavLink to="/about" className="link-button">About</NavLink>
        </button>
        <button className="btn-nav">
          <NavLink to="/home" className="link-button">Home</NavLink>
        </button>
        <button className="btn-nav" style={{marginLeft: '8%'}}>
          <NavLink to="/favorites" className="link-button">Favorites</NavLink>
        </button>
      </div>
      <SearchBar onSearch={onSearch} setAccess={setAccess}/>          
    </nav>
  );
}
