const banco = require('./banco');

describe('banco', () => {
    const bancos = new banco();
    test('El monto maximo no deberia sobrepasar los 10 mil lempiras', () => {
        const monto = bancos.depositos(10000);
        const cuenta = 'deposito-aceptado';
        expect(cuenta).toBe(monto);
    });
    test('El monto minimo no deberia ser menor a 100 lempiras', () => {
        const monto = bancos.depositos(100);
        const cuenta = 'deposito-aceptado';
        expect(cuenta).toBe(monto);
    });
    
    test('El monto minimo del retiro no deberia ser menor a 200 lempiras', () => {
        const monto = bancos.retiros(200);
        const cuenta = 'deposito-aceptado';
        expect(cuenta).toBe(monto);
    });
    test('El monto maximo del retiro no deberia ser mayor a 5000 lempiras', () => {
        const monto = bancos.retiros(5000);
        const cuenta = 'deposito-aceptado';
        expect(cuenta).toBe(monto);
    });
    
});
