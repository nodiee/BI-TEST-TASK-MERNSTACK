function Validation(Values,) {
    let test = '';
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9_]+$/
    if(Values.name ==="") {
        error.name="Name should not be empty"
    }
   
    
    else {
        error.name=""
    }
    if(Values.phoneNumber ==="") {
        error.phoneNumber="Name should not be empty"
    }
   
    
    else {
        error.phoneNumber=""
    }
    
    if(Values.email ==="") {
        error.email="Name should not be empty"
    }
    else if(!email_pattern.test(Values.email)) {
        error.email="email did not match"
    
    }else {
        error.email=""
    }
    
    if(Values.password==="") {
    error.password="Password should not be empty"
    }
    else if(!password_pattern.test(Values.password)) {
    error.password="password did not match"
    }
    
    else {
        error.password=""
    }
    
    return error;
    }
    export default Validation;