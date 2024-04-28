document.addEventListener("DOMContentLoaded", function() {
    const contenedor1 = document.querySelector(".contenedor1");
    contenedor1.classList.add("visible");


    const botonAgregarfeedback = document.getElementById("btnAgregarFeedback");

    botonAgregarfeedback.addEventListener("click", function() {
        window.location.href = "feedback.html";
    });

    const tarjetas = document.querySelectorAll(".tarjetaFeedback");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function() {
            tarjetas.forEach(t => t.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    const modoOscuro = document.getElementById("modoOscuro");
    const body = document.body;

    modoOscuro.addEventListener("click", function() {
        body.classList.toggle("modoOscuro");

    });
});


