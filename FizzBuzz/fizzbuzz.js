

function fizzbuzz(numero){
    if(numero % 5 == 0 && numero % 3 == 0){
        return 'fizzbuzz';
    }
    if(numero.indexOf('3') > -1){
        return 'fizz';
    }
    if(numero.indexOf('5') > -1){
        return 'buzz';
    }
    if(numero % 3 == 0){
        return 'fizz';
    }
    if(numero % 5 == 0){
        return 'buzz';
    }
    return numero;
}

function name(params) {
    
}

module.exports = fizzbuzz;