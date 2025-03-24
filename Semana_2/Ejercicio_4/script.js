


        function generarMensaje() {
            // Obtener los valores ingresados
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var edad = document.getElementById('edad').value;

            // Validar que se hayan ingresado todos los campos
            if (nombre && apellido && edad) {
                // Generar el mensaje de bienvenida
                var mensaje = `¡Hola ${nombre} ${apellido}! Bienvenido, tienes ${edad} años.`;
                // Mostrar el mensaje en la página
                document.getElementById('mensaje').textContent = mensaje;
            } else {
                // Si falta algún campo, mostrar un mensaje de advertencia
                document.getElementById('mensaje').textContent = 'Por favor, completa todos los campos.';
            }
        }
