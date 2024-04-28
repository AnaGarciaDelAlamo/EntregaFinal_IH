document.addEventListener("DOMContentLoaded", function() {
    const modoOscuro = document.getElementById("modoOscuro");
    const body = document.body;

    modoOscuro.addEventListener("click", function () {
        body.classList.toggle("modoOscuro");

    });
});