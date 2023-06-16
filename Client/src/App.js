import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import style from "./components/Cards/Cards.module.css"; //"./components/Cards/Cards.module.css"
import { useState } from "react";
import axios from "axios";

//React Routing
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About/About'
import Detail from './views/Detail/Detail' 
import Error from './views/Error/Error'
import PathRoutes from "./helper/Routes.helper";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

function Ubicacion(props) {
  const location = useLocation();

  if (location.pathname !=='/') return ( <Nav onSearch={props.onSearch} logOut={props.logOut} />);  
}


function App() {
  const navigate =useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL='anita@mail.com';
  const PASSWORD='AL.123456';

function login(userData) {
  if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }// else alert('Your email and password do not match')
 }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

const logOut=()=> {
  setAccess(false);
  // navigate('/');
}

const [characters, setCharacters] = useState([]);

const onSearch = (id) => {
  if(characters.find((char)=> char.id == id)){
    return swal ( "Oops" ,  "Something went wrong!" ,  "error" ) ;
    // alert("Personaje repetido");
  }

  // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
  axios(`http://localhost:3001/rickandmorty/character/${id}`)
  .then(({ data }) => {
      if (data.name) {setCharacters((oldChars) => [...oldChars, data]);}
      else { window.alert("¡No hay personajes con este ID!");}
    });
};

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className={`App`}>
        <Ubicacion onSearch={onSearch} logOut={logOut} />    
        {/* <Nav onSearch={onSearch} />;  */}
        <Routes> 
            <Route path={PathRoutes.FORM} element={<Form login={login} />} />

            <Route path={PathRoutes.HOME} element={<Cards characters={characters}
                                          onClose={onClose}
                                          className={`${style.container}`}
                                          /> } /> 

            <Route path={PathRoutes.ABOUT} element={<About/>} />


            <Route path={PathRoutes.DETAIL} element={<Detail/>} />
            
            <Route path={PathRoutes.ERROR} element={<Error/>} />
            
            <Route path={PathRoutes.FAVORITES} element={<Favorites/>} /> 

            <Route path='*' element={<Navigate to={PathRoutes.ERROR} replace /> }/>
        </Routes>
    </div>
  );
}

export default App;

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };
//{
  /* <Card 
id={Rick.id}
name={Rick.name}
status={Rick.status}
species={Rick.species}
gender={Rick.gender}
origin={Rick.origin.name}
image={Rick.image}
onClose={() => window.alert('Emulamos que se cierra la card')}
/> */
//}