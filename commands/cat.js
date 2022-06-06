
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "cat",
description:"cat command",
async execute(message,client){
    fetch();
    async function fetch(){
    redditFetch({
        subreddit:'memes',
        sort: 'top',
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
        
     }).then(async post => {
        var anser = 1.00-post.upvote_ratio;
        console.log(anser);
        var dwn = anser * post.ups;
        console.log(final);
        var final = Math.round(dwn);
         console.log(post);
         if(post.is_video){fetch();return;}
         if(post.url.includes("gallery")){fetch();return;}
         if(post.upvote_ratio >= 0.90){
            let embed = {
            title: `${post.title}`,
            description: `${post.selftext}`,
            url : `https://redd.it/${post.id}`,
            timestamp: new Date(),
            color : 0xFF0000,
            footer:{text:`💬 ${post.num_comments} 👍 ${post.ups} 👎 ${final}`},
            image:{url:`${post.url}`},
            thumbnail:{url:post.thumbnail},
            author : {icon_url:message.author.dynamicAvatarURL() , name: `${message.author.username}#${message.author.discriminator}`}
            }
            client.createMessage(message.channel.id,{ embed:embed});
     
        
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
         
         }else {
            fetch();
         }
        
         
     });
    }
}
}