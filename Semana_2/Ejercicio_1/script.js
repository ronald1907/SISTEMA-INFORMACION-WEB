
    
    
        function convertir() {
            let monto = parseFloat(document.getElementById("monto").value);
            let cambio = parseFloat(document.getElementById("cambio").value);
            
            if (isNaN(monto) || isNaN(cambio) || cambio <= 0) {
                alert("Por favor, ingrese valores válidos.");
                return;
            }
            
            let resultado = (monto / cambio).toFixed(2);
            document.getElementById("resultado").innerText = resultado + " USD";
        }