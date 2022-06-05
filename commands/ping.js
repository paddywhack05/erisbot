module.exports = {
    name: "ping",
    description: "ping command",
     async execute (message,client){
        client.createMessage(message.channel.id, "Pong!");
    }
}