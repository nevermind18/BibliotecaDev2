const { Client } = require('discord.js')
const { readdirSync } = require('fs')
const { join } = require('path')

module.exports = class extends Client{
    constructor(options){
        super(options)
        this.comandos = []
        this.carregarEventos()
        this.carregarComandos()
    }

    carregarComandos(path = 'src/comandos'){
        const categorias = readdirSync(path)
        for (const categoria of categorias){
            const comandos = readdirSync(`${path}/${categoria}`)
            for (const comando of comandos){
                const comandoClass = require(join(process.cwd(), `${path}/${categoria}/${comando}`))
                const cmd = new (comandoClass)(this)
                this.comandos.push(cmd)
            }
        }
    }

    carregarEventos(path = 'src/eventos'){
        const categorias = readdirSync(path)

        for (const categoria of categorias) {
            const eventos = readdirSync(`${path}/${categoria}`)

            for (const evento of eventos) {
                const eventClass = require(join(process.cwd(), `${path}/${categoria}/${evento}`))
                const evt = new (eventClass)(this)
                this.on(evt.nome, evt.run)
            }
        }
    }


    registrarComandos(){
        this.application.commands.set(this.comandos)
    }
}