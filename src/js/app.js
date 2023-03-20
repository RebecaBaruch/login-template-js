const inputs = document.querySelectorAll("input");

//regex validation
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

let emailErr = "Por favor chefe, insira um email válido!!!!";
let passwErr = "A senha deve ter 8 caracteres (maiúsculos, minpusculos e números)";

//focus style event
const focusIn = (input)=>{
    input.addEventListener("focus", ()=>{
        input.classList.add("focusIn");
    })
}

//focus out style event
const focusOut = (input)=>{
    input.addEventListener("focusout", ()=>{
        input.classList.remove("focusIn");

        if(input.value == "" || input.value == null){
            input.classList.add("focusOut");
        } else {
            input.classList.remove("focusOut");
        }
    })
}

//input validation
const inputValidation = (input, regex, message) =>{
    
    input.addEventListener("input", ()=>{
        let test = regex.test(input.value);

        test == false ? 
        input.classList.add("inputErr"):
        input.classList.remove("inputErr");
    })  

    input.addEventListener("blur", ()=>{
        let test = regex.test(input.value);
        
        if(test == false) alert(message);
    })
}

inputs.forEach((e) => {
    focusOut(e);
    focusIn(e);

    if(e.type == "email") inputValidation(e, emailRegex, emailErr);
    if(e.type == "password") inputValidation(e, passwRegex, passwErr);
});