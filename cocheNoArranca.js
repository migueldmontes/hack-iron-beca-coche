function solucionarProblemaCoche(vivesCerca, ganasCaminar, tieneGasolina, tienesDinero, tieneBateria) {
    if (vivesCerca && ganasCaminar) {
        console.log("Te vas andando y arreglas el coche mañana.");
    } else {
        if (!tieneGasolina) {
            console.log("No tienes gasolina.");
            if (tienesDinero) {
                console.log("Poner gasolina.");
            } else {
                console.log("Vas en metro.");
            }
        } else {
            if (!tieneBateria) {
                console.log("Recargar batería.");
            } else {
                console.log("Pásate por el mecánico.");
            }
        }
    }
}

// Ejemplos de prueba:
solucionarProblemaCoche(true, true, false, false, false); // Te vas andando
solucionarProblemaCoche(false, false, false, true, true); // Poner gasolina
solucionarProblemaCoche(false, false, false, false, true); // Vas en metro
solucionarProblemaCoche(false, false, true, true, false); // Recargar batería
solucionarProblemaCoche(false, false, true, true, true); // Mecánico
