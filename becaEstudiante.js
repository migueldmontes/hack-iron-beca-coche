function puedeOptarBeca(edad, ciudad, familiaNumerosa, genioProgramacion) {
    ciudad = ciudad.toLowerCase(); // para comparar sin problema

    if ((edad >= 18 && ciudad === "barcelona") ||
        (edad > 30 && familiaNumerosa) ||
        (edad >= 12 && edad < 18 && genioProgramacion)) {
        return "Puede optar a la beca";
    } else {
        return "No cumple los requisitos para la beca";
    }
}

// Ejemplos de prueba:
console.log(puedeOptarBeca(19, "Barcelona", false, false)); // Puede optar
console.log(puedeOptarBeca(35, "Madrid", true, false)); // Puede optar
console.log(puedeOptarBeca(15, "Barcelona", false, true)); // Puede optar
console.log(puedeOptarBeca(25, "Madrid", false, false)); // No puede optar
