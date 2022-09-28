
/**
 * Verifie l'email et le password
 * @param {string} values 
 */
function checkForm(values) {
    let errors = {}


    if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "email is invalid"
    }

    if(values.password.length < 5 ) {
        errors.password = "password is invalid"
    }
    return errors
}

export default checkForm;