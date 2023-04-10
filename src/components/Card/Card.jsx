import { NavLink } from "react-router-dom";
import Detail from "../Detail/Detail";
import './Card.css';

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className="card-cont">
      <div className="card-cont2">
        <div className="card">        
          <img src={image} alt="" className="img-card"/>
          <div className="intro">
            <div className="intro-h">
              <h4>ID: {id}</h4>
              <button onClick={() => onClose(id)} className='x'>X</button>
            </div>
            <NavLink to={`/detail/${id}`} element={<Detail/>} className='link'>
              <h2 className="name">{name}</h2>
            </NavLink>
            <p>{status}, {species}, {gender}</p>
            <p>Origin: {origin}</p>
          </div>
        </div>  
      </div>      
    </div>
  );
}
