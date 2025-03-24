
        function verificarBisiesto() {
            // Obtener el año ingresado
            var anio = parseInt(document.getElementById('anio').value);

            // Validar si el valor ingresado es un número positivo
            if (anio && anio > 0) {
                // Verificar si el año es bisiesto
                if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
                    alert(anio + " es un año bisiesto.");
                } else {
                    alert(anio + " no es un año bisiesto.");
                }
            } else {
                alert("Por favor, ingresa un año válido.");
            }
        }
    