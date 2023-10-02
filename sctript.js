const form = document.getElementById('idForm')
const nameInput = document.getElementById('idName')
const ageInput = document.getElementById('idAge')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome")
        return;
    }else if(ageInput === ""){
        alert("Por favor, preencha o sua idaee")
        return;
    }else{
        window.location.href = "./index2.html"
    }
})