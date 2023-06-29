import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.containerImg}>IMAGEN</div>

      <div className={styles.containerExpl}>
        <h5 className={styles.h5}>ANA MARIA LOYO VASQUEZ</h5>
        <h1 className={styles.h2}>About Me</h1>
        <h3 className={styles.h5}>Proyecto de Integracion AMLV</h3>
        <hr />
        <p className={styles.p}>
          En este proyecto estoy aplicando parte los conocimientos que hemos
          adquirido en SoyHenry.{" "}
        </p>
        <p className={styles.p}> - Aplique React </p>
        <p className={styles.p}>  - Aplique Redux </p>
        <p className={styles.p}>  - Aplique Css para los Estilos </p>
      </div>
    </div>
  );
};

export default About;
