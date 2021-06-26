
class banco{
    constructor(){
    }
    estado ={
        aceptado: 'deposito-aceptado',
        rechazado: 'deposito-rechazado',
    }
    deposito ={
        maximo: 10000,
        minimo: 100,
    }
    retiro = {
        maximo: 5000,
        minimo: 200,
    }

    depositos(monto) {
        if(monto >= this.deposito.minimo && monto <= this.deposito.maximo){

            return this.estado.aceptado;
        }
        return this.estado.rechazado;
    }
    retiros(monto){
        if(monto >= this.retiro.minimo && monto <= this.retiro.maximo){

            return this.estado.aceptado;
        }
        return this.estado.rechazado;

        return monto;

    }


}

module.exports = banco;