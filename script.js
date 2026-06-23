function aceptar() {
    document.getElementById("mensaje").innerHTML =
        "🥰 ¡Sabía que dirías que sí! Será una cita increíble ❤️";
}

window.onload = function () {

    const botonNo = document.getElementById("no");

    botonNo.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 80);

        botonNo.style.position = "absolute";
        botonNo.style.left = x + "px";
        botonNo.style.top = y + "px";
    });

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

    setInterval(crearCorazon, 300);
};
