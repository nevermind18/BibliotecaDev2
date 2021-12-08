const evento = require('../../../evento')

class interacao extends evento {
    constructor(cliente) {
        super(cliente, {
            nome: 'interacao'
        })
    }

    run = (interaction) => {
        console.log('1')
        if(interaction.isCommand()){
            console.log('2')
            const cmd = this.cliente.camandos.find(c => c.name === interaction.commandName)
            if(cmd){
                console.log('3')
                cmd.run(interaction)
            }
        }
    }
}

module.exports = interacao