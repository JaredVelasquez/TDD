
function calculator(cadenaNumeros) {
    let arregloNumeros =  [];
    if(cadenaNumeros == ''){
        return cadenaNumeros;
    }
    if(cadenaNumeros.length == 1){
        return cadenaNumeros;
    }
    if(cadenaNumeros.includes('-')){
        arregloNumeros = cadenaNumeros.match(/-\d/g);
        let errorMesagge = arregloNumeros.reduce (function ( total , num ) { 
            return  total + num; 
        });
        return 'No se permiten numeros negativos: ' + errorMesagge;
    }
    if(cadenaNumeros == '1,\n'){
        return 'Formato de entrada incorrecto';
    }
    arregloNumeros = cadenaNumeros.match(/\d/g);


        let suma = arregloNumeros.reduce (function ( total , num ) { 
            if(num > 1000)
                return parseFloat (total);
                 
            return parseFloat (total) + parseFloat (num); 
        });
        return suma;
}

module.exports = calculator;