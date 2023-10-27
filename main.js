

document.addEventListener("DOMContentLoaded", function() {
    const presentarButton = document.getElementById("presentar-button");
    const personajeElements = document.querySelectorAll("#cajas > div");

    let personajeVisible = null;

    presentarButton.addEventListener("click", function() {
        const nombrePersonaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
        const spanElement = document.querySelector("h1 span");
        const personajeId = nombrePersonaje.toLowerCase();

        if (nombrePersonaje !== null && nombrePersonaje !== "") {
            switch (personajeId) {
                case "mario":
                    spanElement.textContent = "Mario";
                    break;
                case "luigi":
                    spanElement.textContent = "Luigi";
                    break;
                case "bowser":
                    spanElement.textContent = "Bowser Morton Koopa";
                    break;
                case "peach":
                    spanElement.textContent = "Princesa Peach Toadstool";
                    break;
                case "yoshi":
                    spanElement.textContent = "T. Yoshisaur Munchakoopas";
                    break;
                case "toad":
                    spanElement.textContent = "Toad";
                    break;
                case "toadette":
                    spanElement.textContent = "Toadette";
                    break;
                case "daisy":
                    spanElement.textContent = "Princesa Daisy";
                    break;
                default:
                    spanElement.textContent = "(desconocido)";
                    break;
            }

            const personajeElement = document.getElementById(personajeId);
            if (personajeElement) {
                personajeElement.style.display = "block";
                personajeElement.setAttribute("title", "Presentado");
                personajeVisible = personajeElement;
            }
        }
    });
});



//reiniciar
document.getElementById("reiniciar-button").addEventListener("click", function() {
    location.reload(); // Recargar la página
});
