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
