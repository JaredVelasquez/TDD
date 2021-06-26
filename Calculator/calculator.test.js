const calculator = require('./calculator');

describe('calculator', () => {
    test('Mandamos cadena de texto vacia y deberia regresar vacia', () => {
        const cadenaNumeros = '';
        const expected = '';
        const result = calculator(cadenaNumeros);
        expect(result).toBe(expected);
    });

    test('Mandamos cadena de texto con un numero y deberia regresar el numero', () => {
        const cadenaNumeros = '1';
        const expected = '1';
        const result = calculator(cadenaNumeros);
        expect(result).toBe(expected);
    });
    
    test('Mandamos cadena de texto con dos numeros y deberia regresar la suma de numeros', () => {
        const cadenaNumeros = '1,2';
        const expected = 3;
        const result = calculator(cadenaNumeros);
        expect(expected).toBe(result);
    });
    
    test('Mandamos cadena de texto con dos varios numeros y deberia regresar la suma de numeros', () => {
        const cadenaNumeros = '1,2,3,4,5,6,7,8';
        const expected = 36;
        const result = calculator(cadenaNumeros);
        expect(expected).toBe(result);
    });
    
    test('Mandamos cadena de texto con varios numeros y deberia regresar la suma de numeros', () => {
        const cadenaNumeros = '1\n2,3';
        const expected = 6;
        const result = calculator(cadenaNumeros);
        expect(result).toBe(expected);
    });
    
    test('Evaluaremos el caso 1,\n el cual deberia retornar un error', () => {
        const cadenaNumeros = '1,\n';
        const expected = 'Formato de entrada incorrecto';
        const result = calculator(cadenaNumeros);
        expect(result).toBe(expected);
    });
    
    test('Evaluaremos el caso //;\n1;2 deberia soportar separadores como ;', () => {
        const cadenaNumeros = '//;\n1;2';
        const expected = 3;
        const result = calculator(cadenaNumeros);
        expect(result).toBe(expected);
    });
    
    test('Si contiene un numero negativo no deberia soportarlo, retornando error', () => {
        const cadenaNumeros = '1,-2';
        const expected = 'No se permiten numeros negativos: -2';
        const result = calculator(cadenaNumeros);
        expect(result).toBe(expected);
    });
    
    test('Si contiene un numero mayor a mil, ignorarlo', () => {
        const cadenaNumeros = '1,2000,2';
        const expected = 3;
        const result = calculator(cadenaNumeros);
        expect(result).toBe(expected);
    });
    
});
