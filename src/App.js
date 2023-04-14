import { useEffect, useState } from "react";
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";

// import characters from "./data.js";

// const example = {
//   id: 1,
//   name: 'Rick Sanchez',
//   status: 'Alive',
//   species: 'Human',
//   gender: 'Male',
//   origin: {
//      name: 'Earth (C-137)',
//      url: 'https://rickandmortyapi.com/api/location/1',
//   },
//   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };
const BASE_URL = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '4ad56d52154b.f5800a94204608bdc3fa';

const email = 'user@gmail.com'
const password = '123456'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if(userData.email === email && userData.password === password){
      setAccess(true)
      navigate('/home')      
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])
  
  
  const onSearch = (id) => {
    axios(`${BASE_URL}/${id}?key=${API_KEY}`)
    .then(response => response.data)
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }
 
 const onClose = (id) => {
  // setCharacters(characters.filter((char) => char.id !== id));
  const charactersFiltered = characters.filter(character => character.id !== id)
  setCharacters(charactersFiltered)
 }
 
  return (
    <div className="App">
      { 
        location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
      }
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/detail/:id' element={<Detail characters={characters}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
