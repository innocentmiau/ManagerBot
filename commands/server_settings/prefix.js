const Discord = require('discord.js');
const utils = require("../utils.js");

exports.run = async (client, message, args) => {
  var language = 0;
  if (language === null) language = 0;
  if (language === 0) {
    const embed = new Discord.RichEmbed()
      .setAuthor("Prefix")
      .setDescription("My prefix is: **mb!**.")
      .setColor([54, 57, 64])
      .setTimestamp();
    message.channel.send(embed);
  } else if (language === 1) {
      const embed = new Discord.RichEmbed()
        .setAuthor("Prefix")
        .setDescription("O meu prefix é: **mb!**.")
        .setColor([54, 57, 64])
        .setTimestamp();
      message.channel.send(embed);
    }
}
