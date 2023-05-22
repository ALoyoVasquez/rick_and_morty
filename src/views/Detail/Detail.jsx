import React, { useState } from "react";
import styles from "./Detail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
      <div className={styles.container2}>
      <h2 className={styles.h2}> {character.name} </h2>
        {/* <h3>NAME:  </h3> */}
        <h3>STATUS: {character.status} </h3>
        <h3>SPECIE: {character.species} </h3>
        <h3>GENDER: {character.gender} </h3>
        <h3>ORIGIN: {character.origin} </h3>
      </div>
      <div >
        <img className={styles.img} src={character.image} alt="" />
      </div>
      {/* <img  </h3> */}
    </div>
  );
};

export default Detail;
