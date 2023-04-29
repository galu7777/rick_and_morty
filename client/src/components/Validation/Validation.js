const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'el email ingresado no es valido rey/reina'
    }
    if(!userData.email){
        errors.email = 'debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email = 'el email no debe superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe tener minimo 6 y maximo 10 caracteres'
    }

    

    return errors;
}

export default validation;