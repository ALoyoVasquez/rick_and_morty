import SearchBar from "./SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link  } from "react-router-dom";
// import About from "../../views/About.jsx";
// About
import image from '../../imgs/Imagen1.png'

export default function Nav(props) {
    // export default function Card({name, species, gender, image, onClose}) {

    const {onSearch} = props;

// const [characters, setCharacters] = useState([]);

return (
        <nav className={style.container}>
            
            <img src={image} alt="" className={style.img} />
            <h1 className={style.cssFont_1}>Rick and Morty</h1>
            <Link to="/home" className={style.link}>Home</Link>
            <Link to="/views/about" className={style.link}>About</Link>
            <SearchBar onSearch={onSearch} />
        </nav>
   
   );
}