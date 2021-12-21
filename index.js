require("dotenv").config()

const Client = require('./src/structures/Client')

const client = new Client({
    intents:[
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'  
    ]
})

/*
client.once('ready', function() {
    console.log('Bot logado!')
})

client.on('messageCreate', function (message) {
    if (message.content === "Oi!"){
        message.reply('Olá, tudo bem?')
    }
    //console.log(message)
})
*/

client.login(process.env.BOT_TOKEN)

