//Challenge 1
// Funciones a Desarrollar Agregar Amigo, Sortear Amigo, Reset,

let listaAmigos = [];
const nombre = document.getElementById('amigo').value;    

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value;

    if (listaAmigos.includes(nombre)) {
        alert("No puedes poner nombres repetidos");
    } else if (nombre.trim() === "") {
        alert("Ingresa un Nombre Valido");
    } else {
        listaAmigos.push(nombre);
        console.log(listaAmigos);
        document.getElementById('amigo').value = '';
        listarAmigos()
    }
}

function listarAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    let i = 0;
    while (i < listaAmigos.length) {
        const li = document.createElement('li');
        li.textContent = listaAmigos[i]; 
        listaHTML.appendChild(li);
        i++;
    }
}
function generarNumeroDeAmigoElegido() {
    const personas = listaAmigos.length;
    let numeroAleatorio = Math.floor(Math.random() * personas);
    console.log(numeroAleatorio);
    return numeroAleatorio;
}

function sortearAmigo() {
    const indice = generarNumeroDeAmigoElegido();
    const amigoElegido = listaAmigos[indice];
    mostrarResultado(amigoElegido);
    document.getElementById('listaAmigos').style.display = "none"; // De esta forma Oculto la lista de amigos 
}

function mostrarResultado(amigo) {
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.textContent = "El amigo secreto es: " + amigo;
    console.log("El amigo secreto es: " + amigo);
}

function resetearJuego() {
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').textContent = "";
    document.getElementById('listaAmigos').style.display = "block";
}
