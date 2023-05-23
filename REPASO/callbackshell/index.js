function saludar(nombre, callback) {
  console.log("Hola 👌 " + nombre);
  setTimeout(() => {
    console.log("Como estas?");
    setTimeout(() => {
      console.log("Nos vemos despues");
      callback();
    }, 2000);
  }, 2000);
}

function despedir() {
  console.log("Adios Gente Bella Y Preciosa 👋");
}

saludar("Plutarco", despedir);
