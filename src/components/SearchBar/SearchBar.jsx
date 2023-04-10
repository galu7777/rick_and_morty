import { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState()

  const handleChange = (e) => {
    setId(e.target.value)
  }

  return (  
    <div className="cont-input">
      <input type="search" value={id} onChange={handleChange} className='input'/>
      <button onClick={() => onSearch(id)} className='btn-search'>Agregar</button>
    </div>
  );
}
