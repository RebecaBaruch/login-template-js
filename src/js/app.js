const inputs = document.querySelectorAll("input");
const email = document.querySelector("#user-email");
const password = document.querySelector("#user-password");
const loginForm = document.querySelector("form");

//user and password for testing
const userData = {
    userName: "Fred (Calvo) Muniz",
    userEmail: "fredbmuniz@gmail.com",
    userPassword: "becaF1lhaLinda"
}

//regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

//error messages
const emailErr = "Por favor chefe, insira um email válido!!!!";
const passErr = "A senha deve ter 8 caracteres (maiúsculos, minúsculos e numéricos)";

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
    if(inputType == "password") styleValidation(e, passRegex, passErr);
});

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let emailVal = regexVal(emailRegex, email);
    let passVal = regexVal(passRegex, password);

    if(emailVal && passVal && 
       email.value == userData.userEmail &&
       password.value == userData.userPassword){

        const user = {
            name: userData.userName,
            email: userData.userEmail
        }

        localStorage.setItem("userData", JSON.stringify(user));
        window.location.replace("./src/pages/user.html");
    } else{
        alert("Email ou senha inválidos. Por favor, insira os dados corretamente!");
    }
})