
        function calcularEdad() {
            // Obtener la edad ingresada
            var edadActual = document.getElementById('edad').value;

            // Validar si el valor es un número positivo
            if (edadActual && edadActual > 0) {
                // Calcular la edad en 5, 10 y 100 años
                var edadEn5 = parseInt(edadActual) + 5;
                var edadEn10 = parseInt(edadActual) + 10;
                var edadEn100 = parseInt(edadActual) + 100;

                // Generar el mensaje
                var mensaje = `En 5 años tendrás ${edadEn5} años, en 10 años tendrás ${edadEn10} años, y en 100 años tendrás ${edadEn100} años.`;

                // Mostrar el mensaje en la página
                document.getElementById('mensaje').textContent = mensaje;
            } else {
                // Si la edad ingresada no es válida
                document.getElementById('mensaje').textContent = 'Por favor, ingresa una edad válida.';
            }
        }
