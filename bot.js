const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDIwNTU3MjE3MjYwMTA5ODQ0.DYUXDg.PRhsvrmZx4l7PZXzD7k4Hvkk6ow');
