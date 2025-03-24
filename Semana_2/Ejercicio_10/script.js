
        function validarFecha(fecha) {
            // Expresión regular para validar el formato dd/mm/yyyy
            var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            return regex.test(fecha);
        }

        function calcularDiferencia() {
            // Obtener las fechas ingresadas
            var fecha1 = document.getElementById('fecha1').value;
            var fecha2 = document.getElementById('fecha2').value;
            
            // Validar el formato de las fechas
            if (!validarFecha(fecha1) || !validarFecha(fecha2)) {
                document.getElementById('resultado').textContent = 'Por favor, ingresa las fechas en el formato dd/mm/yyyy.';
                return;
            }

            // Convertir las fechas al formato Date para poder calcular la diferencia
            var partes1 = fecha1.split('/');
            var partes2 = fecha2.split('/');
            
            var date1 = new Date(partes1[2], partes1[1] - 1, partes1[0]);
            var date2 = new Date(partes2[2], partes2[1] - 1, partes2[0]);
            
            // Validar que la fecha1 no sea posterior a la fecha2
            if (date1 > date2) {
                document.getElementById('resultado').textContent = 'La primera fecha no puede ser posterior a la segunda fecha.';
                return;
            }

            // Calcular la diferencia en milisegundos
            var diferencia = date2 - date1;
            var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Convertir milisegundos a días

            // Mostrar el resultado
            document.getElementById('resultado').textContent = `La diferencia entre las dos fechas es de ${dias} días.`;
        }
    