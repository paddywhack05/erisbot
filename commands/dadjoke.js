
const fetch = require('node-fetch');
module.exports= {
    name: "dadjoke",
    description:"dadjoke command",
    execute(message,client){
       
            e();
            async function e(){
                var headers = {
                    Accept: 'application/json'
                  }
                const url = `https://icanhazdadjoke.com/`;
                const res = await fetch(`${url}`,{method: 'GET', headers: headers});
                const dat = await res.json();
                console.log(dat);
                const img = `https://icanhazdadjoke.com/j/${dat.id}.png`;
                const joke = dat.joke;
                console.log(joke);
                console.log(img);
                let embed = {
                    title: `Dad joke`,
                    description: `${joke}`,
                    url : img,
                    timestamp: new Date(),
                    color : 0xFF0000,
                    footer:{text:`paddycrack.com  icanhazdadjoke.com`},
                    author : {icon_url:message.author.dynamicAvatarURL() , name: `${message.author.username}#${message.author.discriminator}`}
                    }
                    client.createMessage(message.channel.id,{embed:embed})
            }
        }  
    }