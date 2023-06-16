import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div>
      About
        <h1 className={styles.h2}>About</h1>
        <h2 className={styles.h3}>AMLV</h2>
        <h3 className={styles.h3}>Proyecto de Integracion AMLV</h3>
        <div className={styles.containerExpl}>
          <p>En este proyecto estoy aplicando parte los conocimientos que hemos adquirido en SoyHenry. </p>
          <p> - Aplique React </p> 
          <p> - Aplique Redux </p> 
          <p> - Aplique Css para los Estilos </p> 
        </div>
        

    </div>
  );
}

export default About;