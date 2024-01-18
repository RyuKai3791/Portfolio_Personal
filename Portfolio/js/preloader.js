window.addEventListener('load', function() {
    // Establecer un tiempo mínimo de carga (en milisegundos)
    var tiempoMinimo = 3000;

    // Obtener el tiempo actual
    var tiempoInicio = new Date().getTime();

    // Oculta el preloader después del tiempo mínimo
    var tiempoRestante = tiempoMinimo - (new Date().getTime() - tiempoInicio);

    if (tiempoRestante > 0) {
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('contenido').style.display = 'block';
        }, tiempoRestante);

    } else {
        // Si ya ha pasado el tiempo mínimo, oculta el preloader inmediatamente
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
        var bodyElement = document.body;
        bodyElement.style.animation = '';
    }
});