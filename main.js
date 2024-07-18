let NomeUsuario = "";
let Visitante = document.querySelector("#nome-usuario");

while(NomeUsuario == ""){
    NomeUsuario = prompt("Qual é o seu nome?");
}

if(NomeUsuario == null){
    Visitante.textContent = "usuário desconhecido."
}
else{Visitante.textContent = NomeUsuario;}
