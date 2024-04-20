document.getElementById("reservaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const personas = document.getElementById("personas").value;
    const reservas = [];

    if(fecha <= new Date().toISOString().split('T')[0]){
        alert("¡La fecha de reserva debe ser posterior a la fecha actual!");
        return;
    }

    if(hora< "12:00" || hora > "22:00"){
        alert("¡La hora de reserva debe estar entre las 12:00 y las 22:00!");
        return;
    }

    const confirmacion = confirm(`¿${nombre} Confirmas tu reserva para el día ${fecha} a las ${hora} para ${personas} personas?`);

    if (confirmacion) {
        reservas.push({
            nombre: nombre,
            fecha: fecha,
            hora: hora,
            personas: personas
        });
        alert("¡Reserva confirmada! ¡Nos vemos pronto!");
        console.log(reservas)
    } else {
        alert("¡Reserva cancelada! ¡Esperamos verte pronto!");
        window.location.href = "index.html";
    }
});
