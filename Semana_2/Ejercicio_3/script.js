
        function convertir() {
            let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
            
            if (isNaN(fahrenheit)) {
                alert("Por favor, ingrese un valor válido.");
                return;
            }
            
            let celsius = (fahrenheit - 32) * 5/9;
            document.getElementById("resultado").innerText = celsius.toFixed(2) + " °C";
        }


