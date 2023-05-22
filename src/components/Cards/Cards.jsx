import { Route, Routes } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import style from './Cards.module.css';


// export default function Cards(props) {
export default function Cards({characters, onClose}) {
  // const 
  // const {characters, onClose} = props;
       
   return (
    // <Route>
   <div className = {style.container}>
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
   </div>
  //  </Route>
   );
}
