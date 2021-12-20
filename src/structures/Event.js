class Event {
    constructor(client, options){
        this.client       = client
        this.name         = options.name
        this.descriptions = options.descriptions
    }
}

module.exports = Event