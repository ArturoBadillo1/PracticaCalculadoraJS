function suma (){
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var r = num1 + num2;
    if(isNaN(r)){
        document.getElementById('r').value = "Error de Operación...";
    }else{
        document.getElementById('r').value = r;
    }
}

function resta(){
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var r = num1 - num2;
    if(isNaN(r)){
        document.getElementById('r').value = "Error de Operación...";
    }else{
        document.getElementById('r').value = r;
    }
}

function division(){
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var r = num1 / num2;
    if(isNaN(r)){
        document.getElementById('r').value = "Error de Operación...";
    }else{
        document.getElementById('r').value = r;
    }
}
function multiplicacion(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var r = num1 * num2;
    if(isNaN(r)){
        document.getElementById('r').value = "Error de Operación";
    }else{
        document.getElementById('r').value = r;
    }
}
function potencia(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var r = num1 ** num2;
    if(isNaN(r)){
        document.getElementById('r').value = "Error de Operación...";
    }else{
        document.getElementById('r').value = resultado;
    }
}

function limpiar (){
    document.getElementById('numero1').value = null;
    document.getElementById('numero2').value = null;
    document.getElementById('r').value = null;
}
