const Eris = require("eris");
const fs = require('fs');
require("dotenv").config()
const { readdirSync } = require("fs");
const client = new Eris(`Bot ${process.env.TOKEN}`, {
    intents: [
        "guildMessages"
    ]
});
client.commands = new Eris.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready',() => console.log(`${client.user.username} is ready for action`))
client.on("error", (err) => {
    console.log(err);
  })
  client.on("interactionCreate", async (interaction) => {

  })
  client.on("messageCreate", async (message) => {
    if(message.content.toLowerCase() === "!ping") { 
        client.commands.get('ping').execute(message,client)
    }
    else if(message.content.toLowerCase()==="!meme"){
        client.commands.get('meme').execute(message,client)
    }
    else if(message.content.toLowerCase()==="!cat"){
        client.commands.get('cat').execute(message,client)
    }
    else if(message.content.toLowerCase()==="!dadjoke"){
        client.commands.get('dadjoke').execute(message,client)
    }
    else if(message.content.toLowerCase()==="!dankmeme"){
        client.commands.get('dankmeme').execute(message,client)
    }
});


client.connect();