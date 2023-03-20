const inputs = document.querySelectorAll("input");

//regex validation
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwRegex = /^[A-Za-z]\w{7,14}$/;

const inputVal = (e, regex)=>{
    e.value.match(regex)
}

//focus out validation
const focusOut = (input)=>{
    input.addEventListener("focusout", ()=>{
        if(input.value == "" || input.value == null){
            input.classList.add("focusOut");
        } else {
            input.classList.remove("focusOut");
        }
    })
}

inputs.forEach((e) => {
    // e.addEventListener("input", ()=>{
    //     console.log(e.value)
    // })

    focusOut(e);
   
});