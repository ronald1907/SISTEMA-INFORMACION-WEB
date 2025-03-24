
function calcularPropina() {
    // Obtener el monto total y el porcentaje ingresado
    var monto = parseFloat(document.getElementById('monto').value);
    var porcentaje = parseFloat(document.getElementById('porcentaje').value);

    // Validar si los valores son números positivos
    if (monto && monto > 0 && porcentaje && porcentaje > 0) {
        // Calcular el valor de la propina
        var propina = (monto * porcentaje) / 100;

        // Generar el mensaje con el resultado
        var mensaje = `La propina correspondiente es: Gs. ${propina.toFixed(2)}`;

        // Mostrar el mensaje en la página
        document.getElementById('resultado').textContent = mensaje;
    } else {
        // Si los valores no son válidos
        document.getElementById('resultado').textContent = 'Por favor, ingresa un monto y porcentaje válidos.';
    }
}
