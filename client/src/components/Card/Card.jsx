import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Detail from "../Detail/Detail";
import { addFav, removeFav } from "../../Redux/actions";
import {connect} from 'react-redux';
import './Card.css';


const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) => {

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if(isFav){
      setIsFav(false)
      removeFav(id)
    }
    else {
      setIsFav(true)
      addFav({id, name, status, species, gender, origin, image })
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <>
      <div className="card-cont">
        <div className="card-cont2">
          <div className="card">        
            <img src={image} alt="" className="img-card"/>
            <div className="intro">
              <div className="intro-h">
                {/* <h4>ID: {id}</h4> */}
                <button onClick={handleFavorite} className="heart">{isFav ? '❤️' : '🤍'}</button>
                <button onClick={() => onClose(id)} className='x'>X</button>
              </div>
              <NavLink to={`/detail/${id}`} element={<Detail/>} className='link'>
                <h2 className="name">{name}</h2>
              </NavLink>
              <p className="info-p">{status}, {species}, {gender}</p>
              <p className="info-p">Origin: {origin}</p>
            </div>
          </div>  
        </div>      
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => { dispatch(addFav(character)) },
    removeFav: (id) => { dispatch(removeFav(id)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
