import Card from "../Card/Card";
import style from './Favorites.module.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import { useState } from "react";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e)=>{
    dispatch(orderCards(e.target.value));
    if(aux) setAux(true)
    else setAux(false)
  }

  const handleFilter = (e)=>{
    dispatch(filterCards(e.target.value));
  }

  return (
    <>
    <div className={style.container}>
      <div className={style.nav}>
      <label  for="select">Orden: </label>
      <select onChange={handleOrder}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <label  for="select" >  Gender: </label>
        <select onChange={handleFilter} >
          <option value=''>All</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>
      </div>
      <div className={style.container2}>
      { favorites.map(({ id, name, species, gender,  status, image, origin }) => {
        return (
          <Card
          key={id}
          id={id}
          name={name}
          image={image}
          status={status}
          species={species}
          gender={gender}
          origin={origin}
          />
          );
        })}

        </div>
        </div>
    </>
  );
};


export default Favorites;