
/*
JS Linguagem case sensitive: Reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElelementById()
por nome: getElementsByName()
 por Classe: getElementsbyClasseName()
 por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.lenght < 2) {

        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {

        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"

    }


}

function validaEmail () {
    let txtEmail= document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1){
        txtEmail.innerHTML= "E-mail Inválido"
        txtEmail.style.color = "red"
    } else {

        txtEmail.innerHTML= "E-mail valido"
        txtEmail.style.color = "green"


    }


}