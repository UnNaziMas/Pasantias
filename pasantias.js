let fechaFinalizacion; // Variable para almacenar la fecha seleccionada
let intervalo; // Variable para almacenar el intervalo de actualización

function empezarCuentaRegresiva() {
    // Obtener la fecha seleccionada por el usuario
    const fechaElegida = new Date(document.getElementById("fecha").value);

    // Verificar si la fecha seleccionada es válida
    if (isNaN(fechaElegida)) {
        alert("Por favor, selecciona una fecha y hora válida.");
        return;
    }

    // Asignar la fecha seleccionada a la variable fechaFinalizacion
    fechaFinalizacion = fechaElegida;

    // Detener cualquier cuenta regresiva en curso
    if (intervalo) {
        clearInterval(intervalo);
    }

    // Iniciar un nuevo intervalo para actualizar la cuenta regresiva cada segundo
    intervalo = setInterval(actualizarCuentaRegresiva, 1000);
}

function actualizarCuentaRegresiva() {
    // Verificar si la fecha final está definida
    if (!fechaFinalizacion) {
        return;
    }

    // Obtener la fecha y hora actual
    const ahora = new Date();

    // Calcular el tiempo restante en milisegundos
    const tiempoRestante = fechaFinalizacion - ahora;

    // Verificar si el tiempo restante es menor que cero (cuenta regresiva terminada)
    if (tiempoRestante < 0) {
        clearInterval(intervalo); // Detener el intervalo
        document.getElementById("countdown").innerHTML = "¡Tiempo terminado!"; // Mostrar mensaje
        return;
    }

    // Calcular días, horas, minutos y segundos restantes
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Actualizar el contenido del elemento con id "countdown"
    document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}
