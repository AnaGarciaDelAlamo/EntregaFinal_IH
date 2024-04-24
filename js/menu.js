document.addEventListener("DOMContentLoaded", function() {

    const categoria = document.getElementById("categorias");
    const tarjeta = document.querySelectorAll(".tarjeta");


    categoria.addEventListener("change", filtradoDePlatos);

    function filtradoDePlatos(){

        const categoriaSeleccionada = categoria.value;

        tarjeta.forEach(tarjeta => {
            const categoriaTarjeta = tarjeta.getAttribute("data-categoria");

            const categoriaIgual = categoriaSeleccionada === categoriaTarjeta || categoriaSeleccionada === "todos";

            if(categoriaIgual){
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    }
});