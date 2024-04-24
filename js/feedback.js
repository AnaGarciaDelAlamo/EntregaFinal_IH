document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit", function(event) {
       event.preventDefault();

         const nombre = document.getElementById("nombre").value;
         const comentario = document.getElementById("comentario").value;

        let valoracionesGuardadas = window.localStorage.getItem("valoraciones");
        let valoraciones = valoracionesGuardadas ? JSON.parse(valoracionesGuardadas) : [];


        const confirmacion = confirm(`¿${nombre} quieres enviar la valoración?`);

        if (confirmacion) {
            valoraciones.push({
                nombre: nombre,
                comentario: comentario
            });
            alert("¡Valoración enviada! ¡Gracias!");
            window.localStorage.setItem("valoraciones", JSON.stringify(valoraciones));
            console.log(valoraciones)
        } else {
            alert("Valoración cancelada");
            window.location.href = "index.html";
        }
    });

});