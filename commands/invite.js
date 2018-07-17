const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("BOT's invite link")
    .setColor([54, 57, 64])
    .setDescription("Click [here](https://discordapp.com/oauth2/authorize?client_id=468548282746929173&scope=bot&permissions=372632702)")
    .setTimestamp();
  message.channel.send(embed);
}
