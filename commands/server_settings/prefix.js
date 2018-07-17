const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("Prefix")
    .setDescription("My prefix in this server: **jb!**.")
    .setColor([54, 57, 64])
    .setTimestamp();
  message.channel.send(embed);
}
