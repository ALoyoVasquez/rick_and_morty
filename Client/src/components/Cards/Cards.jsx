// import { Route, Routes } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

import image from '../../imgs/agrega.png'


// export default function Cards(props) {
export default function Cards({characters, onClose}) {
  // const 
  // const {characters, onClose} = props;
       
   return (
    // <Route>
   <div className = {style.container}>
    <span className = {style.titulo}>Cards</span>
    {/* { props.characters.map((personaje)=>{ */}
    {/* { characters.map((personaje)=>{ */}
    { characters.map(({id, name, species, gender,origin,status, image})=>{
      return (

              <Card 
                  id = {id}
                  key={id} 
                  name={name} 
                  image={image} 
                  status={status} 
                  species={species} 
                  gender={gender} 
                  origin = {origin} 
                  onClose={onClose}
            />);
            
     } )}
     {/* <img src={image} className={style.imgAdd} alt="" /> */}
   </div>
  //  </Route>
   );
}
