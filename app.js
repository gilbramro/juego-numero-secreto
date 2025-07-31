// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración de Variable tipo array
let amigos = [];

// Capturar Valor de entrada
function agregarAmigo() {
    let ingresarAmigo = document.getElementById('amigo').value;

// Validación de entrada y método push  
    if (ingresarAmigo === "") {
        alert("Por favor ingrese un nombre.");
    } else {
        amigos.push(ingresarAmigo);
        console.log(amigos);

        limpiarCampoEntrada();
    }

}
// Limpiar campo de entrada
function limpiarCampoEntrada() {
    document.querySelector('#amigo').value = '';
}