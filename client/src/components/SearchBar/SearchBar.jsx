import { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch, setAccess }) {
  const [id, setId] = useState()

  const handleChange = (e) => {
    setId(e.target.value)
  }

  const handleLogOut = () => {
    setAccess(false);
  }

  return (  
    <div className="cont-input">
      <input type="search" value={id} onChange={handleChange} className='input'/>
      <button onClick={() => onSearch(id)} className='btn-search'><span>Agregar</span><i></i></button>
      <button onClick={handleLogOut} className='btn-logout'><span>LOG OUT</span><i></i></button> 
    </div>
  );
}
