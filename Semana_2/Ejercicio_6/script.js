
function calcularConIVA() {
    // Obtener el monto ingresado
    var monto = parseFloat(document.getElementById('monto').value);

    // Validar si el monto ingresado es un número positivo
    if (monto && monto > 0) {
        // Calcular el IVA (10%)
        var iva = monto * 0.10;
        // Calcular el monto total con IVA
        var totalConIVA = monto + iva;

        // Generar el mensaje con el resultado
        var mensaje = `El valor del producto con IVA (10%) es: Gs. ${totalConIVA.toFixed(2)}`;

        // Mostrar el mensaje en la página
        document.getElementById('resultado').textContent = mensaje;
    } else {
        // Si el monto no es válido
        document.getElementById('resultado').textContent = 'Por favor, ingresa un monto válido.';
    }
}
