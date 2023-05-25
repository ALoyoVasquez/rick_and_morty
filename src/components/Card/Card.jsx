import { Link } from "react-router-dom";
import styles from "./Card.module.css";


export default function Card(props) {
  // export default function Card(
  const { id, name, species, gender, status, image, origin } = props;
  const {onClose} = props;

  return (
    <div className={`${styles.container}`}>
      <div>
        <button className={styles.closeButton}
          onClick={() => 
            {onClose(id) }
          }
        >
          X
        </button>
      </div>
      <div >
        <img className={styles.imgStyle} src={image} alt="" />
      </div>

        <h3 className={`${styles.id}`}>ID:  {id} </h3>
      <div className={`${styles.details}`}>

      <Link to={`/Detail/Detail/${id}`} >
          {/* <h3 className="card-name">{name}</h3> */}
        <h4 className={`${styles.name}`} > {name} </h4>
      </Link>

        <h4 className={`${styles.status}`}>{status.toUpperCase()}</h4>
        <h4 className={`${styles.origin}`}> ORIGIN {origin.name}</h4>
        <h4 className={`${styles.genero}`}>{gender.toUpperCase()}</h4>
        <h4 className={`${styles.specie}`}>{species.toUpperCase()}</h4>
      </div>
    </div>
  );
}
