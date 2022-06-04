module.exports = {
    name: "ping",
    description: "ping command",
     async execute (client,message){
        client.createMessage(message.channel.id, "Pong!");
    }
}