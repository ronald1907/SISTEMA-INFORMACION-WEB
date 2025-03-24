
    
    
        function convertir() {
            let celsius = parseFloat(document.getElementById("celsius").value);
            
            if (isNaN(celsius)) {
                alert("Por favor, ingrese un valor válido.");
                return;
            }
            
            let fahrenheit = (celsius * 9/5) + 32;
            document.getElementById("resultado").innerText = fahrenheit.toFixed(2) + " °F";
        }
    

