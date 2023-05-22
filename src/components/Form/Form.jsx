import React from 'react'
import validar from '../Validation/validation.js'
import style from './Form.module.css'

const Form = () => {

  const [userData, setUserData] = React.useState({
    email:'',
    password:''
  });

  const [errors, setErrors] = React.useState({});

  // const handleChange =()=>{
  //   set
  // }

  const handleChange=(event)=>{
    // setUserData
    validar(userData.email, setErrors, errors)
  }

  return (
    <div className={style.container}>
      {/* <h2  className={style.item0}>   Form      </h2> */}
      <div className={style.main} >

        <form action="" className={style.item0}>
            <label htmlFor="name" className={style.h3}>E-MAIL</label>
            <input type="text" name='email' value={userData.email} placeholder='Type your Email...'/>
            <label htmlFor="password"className={style.h3}>PASSWORD </label>
            <input type="text" name='password' value={userData.password} placeholder='Type your password...'/>
           {/* <br />  */}
            <button type="submit"className={style.submit}>SUBMIT</button>
        </form>
      </div> 
    </div>
  )
}

export default Form