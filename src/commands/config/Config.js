const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client){
        super(client, {
            name: 'config',
            descriptions: 'Configurar dados do servidor no bot.',
            requireDatabase: true,
            options: [
                {
                    type: 'SUB_COMMAND_GROUP',
                    name: 'welcome',
                    description: 'Configuração do sistema de boas-vindas.',
                    options: [
                        {
                            type: 'SUB_COMMAND',
                            name: 'canal_entrada',
                            description: 'configurar o canal onde a mensagem de boas-vindas será enviada',
                            options: [
                                {
                                    type: 'CHANNEL',
                                    name: 'canal',
                                    description: 'Canal de Texto onde a mensagem será enviada',
                                    required: true
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    }

    run = (interaction) => {
        //if (!interaction.member.permission.has('MANAGE_GUILD')) return interaction.reply({ content: 'Você não têm permissão para utilizar este comando!', ephemeral: true}) 
        const subCommandGroup = interaction.options.getSubcommandGroup();
        const subCommand = interaction.options.getSubcommand()

        require(`../../subCommands/config/${subCommandGroup}/${subCommand}`)(this.client, interaction)
    }
}
