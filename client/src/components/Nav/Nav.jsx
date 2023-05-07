import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

export default function Nav({ onSearch, setAccess }) {
 
  return (
    <nav>
      <div className="container-button">
        <button className="btn-nav" style={{marginRight: '25px'}}>
          <NavLink to="/about" className="link-button"><span>About</span><i></i></NavLink>
        </button>
        <button className="btn-nav">
          <NavLink to="/home" className="link-button"><span>Home</span><i></i></NavLink>
        </button>
        <button className="btn-nav" style={{marginLeft: '8%'}}>
          <NavLink to="/favorites" className="link-button"><span>Favorites</span><i></i></NavLink>
        </button>
      </div>
      <SearchBar onSearch={onSearch} setAccess={setAccess}/>          
    </nav>
  );
}
