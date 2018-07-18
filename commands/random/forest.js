const Discord = require('discord.js');
const fr = require ('../../random/forest.json');

exports.run = async(client, message, args) => {
  const random = fr[Math.floor(Math.random() * fr.length )];
  const embed = new Discord.RichEmbed()
    .setDescription("")
    .setAuthor("Forest", client.user.displayAvatarURL)
    .setDescription("Requested by **" + message.author.username + "**!")
    .setColor([54, 57, 64])
    .setImage(random)
    .setTimestamp();
  message.channel.send(embed);
}
