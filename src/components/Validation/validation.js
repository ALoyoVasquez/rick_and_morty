
function validaEmail(email, setErrors, errors) {
// el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.
    if(!email) setErrors({...errors, email:"Email vacio"})
    else setErrors({...errors, email:""})
}

function validaPassword(params) {
//     la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
}