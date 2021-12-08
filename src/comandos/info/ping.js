const comando = require('../../../comando')
class ping extends comando{
    constructor(cliente){
            super(cliente,{
            nome: 'ping',
            descricao: 'retorna o ping'
        })
    }

    run = (interaction) => {
        interaction.pronto('pong!')
    }
}   

module.exports = ping