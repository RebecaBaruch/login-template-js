const inputs = document.querySelectorAll("input");
const email = document.querySelector("#user-email");
const password = document.querySelector("#user-password");
const loginForm = document.querySelector("form");

//regex
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

let emailErr = "Por favor chefe, insira um email válido!!!!";
let passwErr = "A senha deve ter 8 caracteres (maiúsculos, minúsculos e numéricos)";

//regex validation
const regexVal = (regex, input) => {
    return regex.test(input.value);
}

//focus style event
const focusIn = (input)=>{
    input.addEventListener("focus", ()=>{
        input.classList.add("focusIn");
    })
}

//onblur event with focus out style 
const onBlur = (input)=>{
    input.addEventListener("blur", ()=>{
        input.classList.remove("focusIn");

        if(input.value == "" || input.value == null){
            input.classList.add("focusOut");
        } else {
            input.classList.remove("focusOut");
        }
    })
}

//input validation style
const styleValidation = (input, regex, message) =>{
    
    input.addEventListener("input", ()=>{
        let test = regexVal(regex, input);

        test == false ? 
        input.classList.add("inputErr"):
        input.classList.remove("inputErr");
    })  

    input.addEventListener("focusout", ()=>{
        let test = regexVal(regex, input);
        if(test == false) alert(message);
    })
}

inputs.forEach((e) => {
    onBlur(e);
    focusIn(e);

    let inputType = e.type;

    if(inputType == "email") styleValidation(e, emailRegex, emailErr);
    if(inputType == "password") styleValidation(e, passwRegex, passwErr);
});

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let emailVal = regexVal(emailRegex, email);
    let passwVal = regexVal(passwRegex, password);

    if(emailVal && passwVal){
       window.location.replace("./src/pages/user.html");
    } else{
        alert("Tu é burro man?")
    }
})