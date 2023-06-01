import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from './Favorites.module.css'
// import { connect, useDispatch } from "react-redux";
// import { filterCards, orderCards } from "../../redux/action";
// import { useState } from "react";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  // console.log(state);
  // const dispatch = useDispatch();

  // const [aux, setAux] = useState(false);

  // const handleOrder = (e)=>{
  //   dispatch(orderCards(e.target.value));
  //   if(aux) setAux(true)
  //   else setAux(false)
  // }
  // const handleFilter = (e)=>{
  //   dispatch(filterCards(e.target.value));
  // }

  return (
    <>
    <div className={style.container}>

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
    </>
  );
};

// const mapStateToProps = (state) => {
//   return { myFavorites: state.myFavorites };
// };

export default Favorites;

    // <div className={style.container}>
    // <label  for="select">Orden:</label>
    //   <select id="orden" onChange={handleOrder}>
    //     <option label="Ascendente" value='Ascendente'>Ascendente</option>
    //     <option label="Descendente" value='Descendente'>Descendente</option>
    //   </select>
    // <label  for="select" onChange={handleFilter} >Gender:</label>
    //   <select id="gender">
    //     <option label="Male" value='Male'>Male</option>
    //     <option label="Female" value='Female'>Female</option>
    //     <option label="Genderless" value='Genderless'>Genderless</option>
    //     <option label="unknown" value='unknown'>unknown</option>
    //   </select>
    // </div>