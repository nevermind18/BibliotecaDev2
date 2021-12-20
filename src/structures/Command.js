class Command {
    constructor(client, options){
        this.client          = client
        this.name            = options.name
        this.description     = options.descriptions
        this.options         = options.options 
        this.requireDatabase = options.requireDatabase
    }
}

module.exports = Command