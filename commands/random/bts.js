const Discord = require('discord.js');
const bts = require ('../../random/bts.json');

exports.run = async(client, message, args) => {
  const random = bts[Math.floor(Math.random() * bts.length )];
  const embed = new Discord.RichEmbed()
    .setDescription("")
    .setAuthor("Bts", client.user.displayAvatarURL)
    .setDescription("Requested by **" + message.author.username + "**!")
    .setColor([54, 57, 64])
    .setImage(random)
    .setTimestamp();
  message.channel.send(embed);
}
