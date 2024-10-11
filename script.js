// Seleccionamos el botón por su id
document.getElementById('lucky-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Evita la acción predeterminada

    // Verificamos si el botón fue correctamente identificado
    console.log('Botón de "Voy a tener suerte" ha sido presionado.');

    // Capturamos el valor del campo de búsqueda
    var query = document.querySelector('.search-input').value;

    // Verificamos si la barra de búsqueda tiene un valor
    console.log('Búsqueda ingresada: ', query);

    // Si hay un valor en la barra de búsqueda, redirigimos al primer resultado
    if (query) {
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query) + '&btnI=1';
    } else {
        console.log('No se ingresó ninguna búsqueda.');
    }
});
