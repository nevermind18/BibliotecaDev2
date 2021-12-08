const evento = require('../../../evento')

class pronto extends evento {
    constructor(cliente) {
        super(cliente, {
            nome: 'pronto'
        })
    }

    run = () =>{
        console.log('tesadasd')
    }
}

module.exports = pronto