import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import RM from './assets/RM.png'
import './Detail.css'

const BASE_URL = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "4ad56d52154b.f5800a94204608bdc3fa";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${BASE_URL}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then(( data ) => {
        if(data.name) {
          setCharacter(data);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
      return setCharacter({});
  }, [id]);

  return(
    <div className="cont-detail">
      <div className="container-des">
        <div>
          <img src={RM} alt="RM" className="logo"/>
        </div>
        <h2 className="desc">Name: {character?.name}</h2>
        <h2 className="desc">Status: {character?.status}</h2>
        <h2 className="desc">Specie: {character?.species}</h2>
        <h2 className="desc">Gender: {character?.gender}</h2>
        <h2 className="desc">Origin: {character?.origin?.name}</h2>
      </div>
      {/* <div style={{margin: '50px'}}/> */}
      <div className="container-img">
        <img src={character?.image} alt={character?.name} className='img-detail'/>
      </div>        
    </div>
  );
}
