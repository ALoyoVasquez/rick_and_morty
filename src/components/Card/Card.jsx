import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";


function Card({ id, name, species, gender, status, image, origin, onClose, addFav, removeFav, myFavorites }) {

  const [isFav, setIsFav] = useState(false);
  /**  const dispatch = useDispatch(); */

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

// { id, name, species, gender, status, image, origin }
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id, name, species, gender, status, image, onClose, addFav, removeFav});
    }
  };

  return (
    
    <div className={`${styles.container}`}>
      <div>
        <button className={styles.closeButton} onClick={() => {onClose(id);}} > X </button>
      </div>
      <div>
        <img className={styles.imgStyle} src={image} alt="" />
      </div>
      {isFav ? (
        <button className={styles.favButton} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.favButton} onClick={handleFavorite}>🤍</button>
      )}

      {name ? (
        <>
          <div className={`${styles.details}`}>
            <Link to={`/Detail/Detail/${id}`}><h4 className={`${styles.name}`}>{name}</h4></Link>
            <h3 className={`${styles.id}`}>ID: {id} </h3>
            <h4 className={`${styles.status}`}>{status}</h4><br />
            <h4 className={`${styles.specie}`}>{species}</h4><br />
            <h4 className={`${styles.genero}`}>{gender}</h4><br />
            <h4 className={`${styles.origin}`}>ORIGIN:{origin?.name}</h4>
          </div> 
        </>
        ) : (
            <h3>Loading...</h3>
          )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => { dispatch(addFav(character)); },
    removeFav: (id) => { dispatch(removeFav(id)); },
  };
};

const mapStateToProps = (state) => {
  return { myFavorites : state.myFavorites, } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
