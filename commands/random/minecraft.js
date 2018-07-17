const Discord = require('discord.js');
const mine = require ('../../random/minecraft.json');

exports.run = async(client, message, args) => {
  const random = mine[Math.floor(Math.random() * mine.length )];
  const embed = new Discord.RichEmbed()
    .setDescription("")
    .setAuthor("Minecraft", client.user.displayAvatarURL)
    .setDescription("Requested by **" + message.author.username + "**!")
    .setColor([54, 57, 64])
    .setImage(random)
    .setTimestamp();
  message.channel.send(embed);
}
