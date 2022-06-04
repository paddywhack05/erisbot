const Eris = require("eris");
require("dotenv").config()
// Replace TOKEN with your bot account's token
const client = new Eris(`Bot ${process.env.TOKEN}`, {
    intents: [
        "guildMessages"
    ]
});

client.on("error", (err) => {
    console.error(err); // or your preferred logger
  })

  client.on("messageCreate", (msg) => {
    if(msg.content === "!ping") { 
        client.createMessage(msg.channel.id, "Pong!");
    } else if(msg.content === "!pong") {
        client.createMessage(msg.channel.id, "Ping!");
    }
});


client.connect();