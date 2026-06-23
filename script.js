let tamaño = 18;

/* ⭐ ESTRELLAS */
function crearEstrella() {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");

    const size = Math.random() * 4 + 2;

    estrella.style.width = size + "px";
    estrella.style.height = size + "px";

    estrella.style.left = Math.random() * window.innerWidth + "px";
    estrella.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(estrella);
}

/* 💖 CORAZONES */
function crearCorazon() {
    const corazon = document.createElement("div");

    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.fontSize = (Math.random() * 25 + 15) + "px";
    corazon.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 10000);
}

/* 💕 BOTÓN SI */
function aceptar() {
    document.body.style.background =
        "linear-gradient(135deg,#ff4f7b,#ffb6c1)";

    document.getElementById("mensaje").innerHTML =
        "🥰 ¡Sabía que dirías que sí! ❤️";

    for (let i = 0; i < 50; i++) {
        crearCorazon();
    }
}

/* 🚀 CUANDO CARGA LA PÁGINA */
window.onload = function () {

    const botonNo = document.getElementById("no");

    /* corazones constantes */
    setInterval(crearCorazon, 300);

    /* estrellas de fondo */
    for (let i = 0; i < 100; i++) {
        crearEstrella();
    }

    /* botón que se escapa + crece el sí */
    botonNo.addEventListener("mouseover", mover);
    botonNo.addEventListener("click", mover);

    function mover() {
        tamaño += 5;
        document.getElementById("si").style.fontSize = tamaño + "px";

        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 80);

        botonNo.style.position = "absolute";
        botonNo.style.left = x + "px";
        botonNo.style.top = y + "px";
    }
};
