const validate = (userData, errors, setErrors) => {

  if (!userData.email)
    setErrors({ ...errors, email: "Por favor completa este campo." });

  else if (userData.email.length > 35)
        setErrors({...errors, email: "El UserName debe ser máximo de 35 caracteres"});

  else if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email))
        setErrors({...errors, email: "You have entered an invalid email address!"});

  else if (!userData.password)
        setErrors({ ...errors, password: "Password empty" });

  else if (!/\d/.test(userData.password))
        setErrors({...errors, password: "La contraseña debe contener al menos 1 número."});

  else if (userData.password.length > 10 || userData.password.length < 6)
        setErrors({...errors, password: "La contraseña tiene que tener una longitud entre 6 y 10 caracteres."});

  else {
    setErrors({ ...errors, email: "", password: "" });
  }
};

export default validate;
// module.exports={
//     validate,
//     // validaPassword
// }

// let errors={};

// el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.
//     if(!data.email.includes('@'))
//         errors.e1 = 'Ingresa un email válido.'

//     if(!data.email)
//         errors.e2 = 'Ingresa un email.'

//     if(data.email.length > 35)
//         errors.e3 = 'El email debe tener menos de 35 caracteres.'

//     if(!/.*\d+.*/.test(data.password))
//         errors.p1 = "La password debe tener al menos 1 numero"

//     if(data.password.length > 10 || data.password.length < 6 )
//         errors.p2 = "La contraseña debe tener una longitud entre 6 y 10 caracteres."

//     return errors;
// }
