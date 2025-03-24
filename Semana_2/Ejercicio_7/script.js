
function desglosarProducto() {
    // Obtener el monto ingresado con IVA
    var montoConIVA = parseFloat(document.getElementById('montoConIVA').value);

    // Validar si el monto ingresado es un número positivo
    if (montoConIVA && montoConIVA > 0) {
        // Calcular el valor del IVA (10%)
        var iva = montoConIVA * 0.10;
        // Calcular el valor sin IVA
        var montoSinIVA = montoConIVA / 1.10;

        // Generar el mensaje con los resultados
        var mensaje = `El valor del producto sin IVA es: Gs. ${montoSinIVA.toFixed(2)}<br>
                       El valor del IVA (10%) es: Gs. ${iva.toFixed(2)}`;

        // Mostrar el mensaje en la página
        document.getElementById('resultado').innerHTML = mensaje;
    } else {
        // Si el monto no es válido
        document.getElementById('resultado').textContent = 'Por favor, ingresa un monto válido.';
    }
}