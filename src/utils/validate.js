export const checkValidations = (email , password , name) => {

    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    if(!isValidEmail) return "Invalid Email Address"
    if(!isValidPassword) return "Invalid Password"

    return null;

}