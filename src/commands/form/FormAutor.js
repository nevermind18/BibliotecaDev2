const Command = require('../../structures/Command')

const questions = require('../../util/FormCadastroAutor')

const { once } = require('events')
const { MessageEmbed, MessageActionRow, MessageSelectMenu, Message } = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'form_autor',
            descriptions: 'Realiza um cadastro de autor no Discord'
        })
    }

    run = (interaction) => {
        interaction.reply({ content: 'Formulário de cadastro iniciado. Responda às perguntas abaixo:', ephemeral: true })

        createForm()
            .then(answers => {
                const embed = new MessageEmbed()
                    .setTitle('Respostas do Formulário:')
                    .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter(`ID do usuário: ${interaction.user.id}`)
                    .setColor('RED')
                    .addFields(answers)

                interaction.channel.send({ embeds: [embed] })
            })
            .catch((erro) => {
                const embed = new MessageEmbed()
                    .setColor('RED')
                    .setDescription(erro)

                interaction.channel.send({ content: interaction.user.toString(), embeds: [embed] })
            })

        async function createForm() {
            const answers = []
            const channel = interaction.channel

            for (const question of questions) {
                const embed = new MessageEmbed()
                    .setTitle(question.question)
                    .setFooter('Você tem 5 minutos para responder à esta pergunta.') // 5 minutos para cada pergunta

                if (question.options) {
                    const actionRow = new MessageActionRow()
                        .addComponents(new MessageSelectMenu(question))
                    const msg = await channel.send({ content: interaction.user.toString(), embeds: [embed], components: [actionRow] })

                    const filter = (i) => i.user.id = interaction.user.id

                    const collector = msg.createMessageComponentCollector({ filter, max: 1, time: (5 * 60000) })

                    const [collected, reason] = await once(collector, 'end')

                    if (reason === 'limit') {
                        msg.delete().catch(() => { })
                        answers.push({
                            name: collected.first().customId,
                            value: collected.first().values.join(', ')
                        })
                    }
                    else if (reason === 'time') throw ('O tempo para responder a pergunta se esgotou! Formulário cancelado.')
                    else throw ('Ocorreu um erro durante a realização do formulário e este foi finalizado.')
                } else {
                    const msg = await channel.send({ content: interaction.user.toString(), embeds: [embed] })

                    const filter = (m) => m.author.id === interaction.user.id && m.content?.length > 0 && m.content?.length < 1058
                    const collector = channel.createMessageCollector({ filter, max: 1, time: (5 * 60000) })

                    //collector.once('end', (collected, reason) => {}) - mesma coisa que a linha abaixo 47
                    const [collected, reason] = await once(collector, 'end')
                    console.log(collected)
                    console.log(reason)

                    if (reason === 'limit') {
                        channel.bulkDelete([msg.id, collected.first().id]).catch(() => { })
                        answers.push({
                            name: question.name,
                            value: collected.first().content
                        })
                    }
                    else if (reason === 'time') throw ('O tempo para responder a pergunta se esgotou! Formulário cancelado.')
                    else throw ('Ocorreu um erro durante a realização do formulário e este foi finalizado.')
                }
                console.log(answers)
            }
            return answers
        }
    }
}
