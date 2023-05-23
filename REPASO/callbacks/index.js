function saludar(nombre, callback) {
  console.log("Hola 😃 " + nombre);
  callback();
}

function despedir() {
  console.log("Adios desde la linea 6 👋");
}

saludar("Jostin", () => {
  console.log("Adios desde la linea 11👋");
});
