import SearchBar from "./SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link  } from "react-router-dom";
// About
import image from '../../imgs/logo-name.png'

export default function Nav(props) {

const {onSearch, logOut} = props;
// const {logOut}

return (
        <nav className={style.container}>
            
            <img src={image} alt="" className={style.img} />

            <Link to="/home" className={style.link}>Home</Link>
            <Link to="/views/About/about" className={style.link}>About</Link>
            {/* <h3> Bienvenido , </h3> */}
            <Link to="/favorites" className={style.link}>Favorites</Link>
            <Link to="/" className={style.link} params={ logOut }>Log_Out</Link>
            <SearchBar onSearch={onSearch} />
        </nav>
   );
}