function jugar() {
  while (true) {
    let jugador;
    let consola;

    while (true) {
      jugador = prompt("Elige: piedra, papel o tijera").toLocaleLowerCase();

      if (jugador === "piedra" || jugador === "papel" || jugador === "tijera") {
        break;
      } else {
        alert("Opción no válida. Inténtalo de nuevo.");
      }
    }

    const opciones = ["piedra", "papel", "tijera"];
    const indiceConsola = Math.floor(Math.random() * 3);
    consola = opciones[indiceConsola];

    console.log("Jugador eligió: " + jugador);
    console.log("Consola eligió: " + consola);

    if (jugador === consola) {
      console.log("Empate");
    } else if (
      (jugador === "piedra" && consola === "tijera") ||
      (jugador === "papel" && consola === "piedra") ||
      (jugador === "tijera" && consola === "papel")
    ) {
      console.log("¡Ganaste!");
    } else {
      console.log("La consola gana.");
    }

    const jugarNuevamente = confirm("¿Quieres jugar de nuevo?");
    if (!jugarNuevamente) {
      console.log("Gracias por jugar, hasta la proxima") 
      break;
    }
    else {
      console.log("sigamos jugando :)");
    }
  }
}

jugar();

