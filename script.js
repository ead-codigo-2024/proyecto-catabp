// Selecciona todas las imágenes que deseas agrandar al hacer clic
const imagenes = document.querySelectorAll('#imagen-caja-rellena, #imagen-arreglo-petalos-rosas');

// Función para alternar la clase de ampliación
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        // Alterna la clase .imagen-ampliada para agrandar o reducir
        imagen.classList.toggle('imagen-ampliada');
    });
});

function volverAlInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza hacia el inicio de la página con un desplazamiento suave
}


document.querySelector(".search-bar").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener el texto ingresado en el campo de búsqueda
    const searchQuery = document.querySelector(".search-bar input[type='text']").value.toLowerCase();

// Definir palabras clave y URLs de redirección
const searchResults = {
    "topiary en tonos rosas": "topiary.html",
    "arreglo con rosas preservadas": "arreglo-rosas-preservadas.html",
    "arreglo para arrimo": "arreglo-arrimo.html",
    "arreglo de frutas y flores de seda": "arreglo-frutas-flores-seda.html",
    "caja rellena": "caja-rellena.html",
    "arreglo de pétalos y rosas": "arreglo-petalos-rosas.html",
    "velas de mosaico": "vela-mosaico.html",
    "bandeja aromática": "bandeja-aromatica.html",
    "bandeja de cítricos": "bandeja-citricos.html",
    "una ventana florida": "ventana.html",
    "tarjeta con flores secas": "tarjeta-flores.html",
    "botella con flores y resina": "botella.html",
    "cuadro de conchitas": "cuadro-conchitas.html",
    "métodos de secado": "metodos-secado.html",
    "prensado de flores": "prensado-flores.html",
    "aromaterapia": "aromaterapia.html",
    "arreglos secos": "arreglos-secos.html",
    "semillas": "semillas.html",
    "velas": "velas.html",
    "prensado": "prensado.html",
    "tecnicas": "tecnicas.html"

};

    // Verificar si el término de búsqueda coincide con una palabra clave
    if (searchResults[searchQuery]) {
        // Redirigir a la página correspondiente
        window.location.href = searchResults[searchQuery];
    } else {
        // Mostrar una alerta si no hay coincidencia
        alert("No se encontraron resultados para: " + searchQuery);
    }
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    if (width < 768) {
      document.getElementById('mobile-menu').style.display = 'block';
    } else {
      document.getElementById('mobile-menu').style.display = 'none';
    }
  });