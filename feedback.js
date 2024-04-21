document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit", function(event) {
       event.preventDefault();

         const nombre = document.getElementById("nombre").value;
         const comentario = document.getElementById("comentario").value;
         const valoraciones = [];

        const confirmacion = confirm(`¿${nombre} quieres enviar la valoración?`);

        if (confirmacion) {
            valoraciones.push({
                nombre: nombre,
                comentario: comentario
            });
            alert("¡Valoración enviada! ¡Gracias!");
            console.log(valoraciones)
        } else {
            alert("Valoración cancelada");
            window.location.href = "index.html";
        }
    });

});