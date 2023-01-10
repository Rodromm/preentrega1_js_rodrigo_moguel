function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 1;
    let dolar = 20;
    let euro = 24.11;
    if(document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("EL CAMBIO DE PESOS A DOLARES ES: $" + resultado.toFixed(2));

    }

    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("EL CAMBIO DE PESOS A EUROS ES: $" + resultado.toFixed(2));
    }

    else{
        alert("Tienes que completar todos los requerimientos");
    }
}