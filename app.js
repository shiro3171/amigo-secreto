// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para capturar, validar, actualizar y limpiar el campo de entrada
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let input = document.getElementById("nombreAmigo");
  let nombre = input.value.trim(); // Elimina espacios extra
  
  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // Salir de la función si está vacío
  }
  
  // Actualizar el array de amigos
  amigos.push(nombre);
  // Muestra el array en la consola
  console.log("Amigos:", amigos); 
  
  // Limpiar el campo de entrada
  input.value = "";
}

// Función para actualizar y mostrar la lista de amigos
function mostrarAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
      // Crear un nuevo elemento de lista
      let item = document.createElement("li");
      item.textContent = amigos[i]; // Asignar el nombre del amigo al elemento
      
      // Agregar el elemento a la lista
      lista.appendChild(item);
    }
  }
  
  // Función para sortear un amigo del array
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
      alert("No hay amigos disponibles para el sorteo.");
      return; // Salir de la función si el array está vacío
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    let resultado = document.getElementById("resultadoSorteo");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
  }
  