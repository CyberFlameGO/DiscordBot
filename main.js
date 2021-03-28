const Discord = require('discord.js');

const client = new Discord.Client();

const Prefix = '/';

client.once('ready', () => {
    console.log('Toooooonsy is online!')
});    

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.lenght).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'imb'){
        message.channel.send('imb is a dog shit server');
    }    
});













































client.login('No');
