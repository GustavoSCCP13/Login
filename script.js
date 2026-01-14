function logar(){
var usuario = document.getElementById("input-usuario").value;
var senha = document.getElementById("input-senha").value;

if (usuario == "admin" && senha == "1234") {
    alert('Você logou')
} else {
    alert('Dados de acesso inválidos')
}

}