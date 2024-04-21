document.addEventListener("DOMContentLoaded", function() {

    const categoria = document.getElementById("categorias");
    /*const caracteristica = document.getElementById("caracteristicas");*/
    const tarjeta = document.querySelectorAll(".tarjeta");


    categoria.addEventListener("change", filtradoDePlatos);
   // caracteristica.addEventListener("change", filtradoDePlatos);

    function filtradoDePlatos(){

        const categoriaSeleccionada = categoria.value;
        //const caracteristicaSeleccionada = caracteristica.value;

        tarjeta.forEach(tarjeta => {
            const categoriaTarjeta = tarjeta.getAttribute("data-categoria");
          //  const caracteristicaTarjeta = tarjeta.getAttribute("data-caracteristica");

            const categoriaIgual = categoriaSeleccionada === categoriaTarjeta || categoriaSeleccionada === "todos";
           // const caracteristicaIgual = caracteristicaSeleccionada === caracteristicaTarjeta || caracteristicaSeleccionada === "todas";

            if(categoriaIgual /*&& caracteristicaIgual*/){
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    }

});