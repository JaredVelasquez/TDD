const fizzbuzz = require('./fizzbuzz');


describe('fizzbuzz', () => {
    test('Si el numero es divisible entre 3 imprimir fizz', () => {
        const expected = 'fizz';
        const number = 3;
        const result = fizzbuzz(number.toString());
        expect(expected).toBe(result);
    });
    
    test('Si el numero es divisible entre 5 imprimir buzz', () => {
        const expected = 'buzz';
        const number = 5;
        const result = fizzbuzz(number.toString());
        expect(expected).toBe(result);
    });

    test('Si el numero es divisible entre 3 y 5 imprimir fizzbuzz', () => {
        const expected = 'fizzbuzz';
        const number = 15;
        const result = fizzbuzz(number.toString());
        expect(expected).toBe(result);
    });

    test('Si el numero contiene 3', () => {
        const expected = 'fizz';
        const number = 33;
        const result = fizzbuzz(number.toString());
        expect(expected).toBe(result);
    });

    test('Si el numero contiene 5', () => {
        const expected = 'buzz';
        const number = 51;
        const result = fizzbuzz(number.toString());
        expect(expected).toBe(result);
    });
    

});
