import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState ("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input className={style.input} type='search' onChange={handleChange} value={id}/>
         <button className={style.button} onClick={()=>{
            onSearch(id);
         } }
         >
            Agregar
         </button>
         <button className={style.button} onClick={()=>{
            onSearch(`${Math.floor(Math.random() * (826 - 1 + 1) + 1)}`);
         } }>Random</button>
      </div>
   );
}
