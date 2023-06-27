import React from 'react';
import style from './Form.module.css';
import validate from './validation';

const Form = (props) => {

  const [userData, setUserData] = React.useState({
    email:'',
    password:''
  });

  const [errors, setErrors] = React.useState({
    email:'',
    password:''
  });

  const handleChange=(event)=>{
    const property = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [property]:value});
    validate({...userData, [property]:value}, errors, setErrors);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    props.login(userData);
  }

  return (
    <div className={style.container}>
      {/* <h2  className={style.item0}>   Form      </h2> */}
      <div className={style.main} >

        <form action="" className={style.item0}>
            <label htmlFor="email" className={style.h3}>E-MAIL </label>
            <input type="text" name='email' onChange={handleChange}  value={userData.email} placeholder='Type your Email...'
            className={errors.email ? style.error : style.success}
            />
            <p>{errors.email}</p>
            <label htmlFor="password"className={style.h3}>PASSWORD </label>
            <input type="text" name='password' onChange={handleChange} value={userData.password} placeholder='Type your password...'
            className={errors.password ? style.error : style.success}
            />
            <p>{errors.password}</p>
            <button type="submit" className={style.submit} onClick={handleSubmit}>SUBMIT</button>
        </form>
      </div> 
    </div>
  )
}

export default Form