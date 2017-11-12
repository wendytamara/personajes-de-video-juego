var personajes = document.querySelectorAll(".personaje");
    for (var i = 0; i < personajes.length; i++) {
      personajes[i].addEventListener("click", mostrarInfoPersonaje);
    }

function mostrarInfoPersonaje() {
  var nombre = this.dataset.nombre;
  var fecha = this.dataset.fecha;

var parrafoInfo = document.createElement("p");
parrafoInfo.classList.add("active");
parrafoInfo.innerText = "Su nombre es " + nombre + " y su primera aparicion fue en " + fecha;

var espacio = document.querySelector(".informacion");
espacio.appendChild(parrafoInfo);

var infoVisible = document.querySelector("p.active");
infoVisible.classList.remove("active");


}
