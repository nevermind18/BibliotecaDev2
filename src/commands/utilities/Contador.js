const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/Command')

const actionRow = new MessageActionRow()
    .addComponents(
        [
            new MessageButton()
                .setStyle('DANGER')
                .setLabel('-1')
                .setCustomId('REMOVER'),
            new MessageButton()
                .setStyle('SUCCESS')
                .setLabel('+1')
                .setCustomId('ADICIONAR'),
            new MessageButton()
                .setStyle('PRIMARY')
                .setLabel('ZERAR')
                .setCustomId('ZERAR')
        ]
    )

module.exports = class extends Command {
    constructor(client) {
        super(client,{
            name: 'contador',
            descriptions: 'Inicia um contador no canal'
        })
    }

    run = async (interaction) => {
        let contador = 0
        
        const reply = await interaction.reply({
            content: `Contagem: \`${contador}\``,
            components: [actionRow],
            fetchReply: true
        })

        const filter = (b) => b.user.id === interaction.user.id
        const collector = reply.createMessageComponentCollector({ filter, time: (15000) })

        collector.on('collect', (i) => {
            switch (i.customId) {
                case 'REMOVER':
                    contador--
                    break;
                case 'ADICIONAR':
                    contador++
                    break;
                case 'ZERAR':
                    contador = 0
                    break; 
            }

            i.update({
                content: `Contagem: \`${contador}\``
            })
        })


        collector.on('end', (collected, reason) =>{
            if (reason === 'time') interaction.editReply({
                content: `Contagem finalizada em: \`${contador}\``,
                components: []
            })
        })
    }
       
}