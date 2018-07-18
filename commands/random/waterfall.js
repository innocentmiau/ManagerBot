const Discord = require('discord.js');
const wf = require ('../../random/waterfall.json');

exports.run = async(client, message, args) => {
  const random = wf[Math.floor(Math.random() * wf.length )];
  const embed = new Discord.RichEmbed()
    .setDescription("")
    .setAuthor("Waterfall", client.user.displayAvatarURL)
    .setDescription("Requested by **" + message.author.username + "**!")
    .setColor([54, 57, 64])
    .setImage(random)
    .setTimestamp();
  message.channel.send(embed);
}
