import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={`${styles.container2}`}></div>
      <div className={`${styles.container2}`}></div>
      <div className={`${styles.container2}`}>
        <div className={`${styles.label}`}>
          {character.name ? (
            <>
              <h2>{character.name} </h2>
              STATUS: <span className={styles.text}>{character.status}</span><br />
              SPECIE: <span className={styles.text}> {character.species}</span><br />
              GENDER: <span className={styles.text}> {character.gender} </span><br />
              ORIGIN: <span className={styles.text}>{character.origin?.name}</span>
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
      <div className={styles.container2}>
        <img className={styles.img} src={character.image} alt="" />
      </div>
      <div className={`${styles.container2}`}></div>
      <div className={`${styles.container2}`}></div>
      {/* <img  </h3> */}
    </div>
  );
};

export default Detail;
