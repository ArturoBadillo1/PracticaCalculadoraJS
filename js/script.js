function suma (){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var resultado = num1 + num2;
    if(isNaN(resultado)){
        document.getElementById('resultado').value = "Error de Operación...";
    }else{
        document.getElementById('resultado').value = resultado;
    }
}

function resta(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var resultado = num1 - num2;
    if(isNaN(resultado)){
        document.getElementById('resultado').value = "Error de Operación...";
    }else{
        document.getElementById('resultado').value = resultado;
    }
}

function division(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var resultado = num1 / num2;
    if(isNaN(resultado)){
        document.getElementById('resultado').value = "Error de Operación...";
    }else{
        document.getElementById('resultado').value = resultado;
    }
}
function multiplicacion(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var resultado = num1 * num2;
    if(isNaN(resultado)){
        document.getElementById('resultado').value = "Error de Operación";
    }else{
        document.getElementById('resultado').value = resultado;
    }
}

function potencia(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var resultado = num1 ** num2;
    if(isNaN(resultado)){
        document.getElementById('resultado').value = "Error de Operación...";
    }else{
        document.getElementById('resultado').value = resultado;
    }
}

function limpiar (){
    document.getElementById('numero1').value = null;
    document.getElementById('numero2').value = null;
    document.getElementById('resultado').value = null;
}
