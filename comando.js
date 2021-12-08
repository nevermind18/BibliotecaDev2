class comandos {
    constructor(cliente, opcoes) {
        this.cliente = opcoes
        this.nome = opcoes.nome
        this.descricao = opcoes.descricao
        this.opcoes = opcoes.opcoes
        this.requireDatabase = opcoes.requireDatabase
    }
}
module.exports = comandos