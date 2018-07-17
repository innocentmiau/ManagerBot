const Discord = require('discord.js');
const db = require('quick.db');
const utils = require("../utils.js");

var language = await db.fetch(`guild_language_${message.guild.id}`);
if (language === null) language = 0;

exports.run = async (client, message, args) => {
  const m = await message.channel.send("Calculating...");
  let embed = new Discord.RichEmbed()
    .setAuthor("Latency!", client.user.displayAvatarURL)
    .setColor([54, 57, 64])
    .setDescription(`Pong! :ping_pong: \nLatency is **${m.createdTimestamp - message.createdTimestamp}**ms.\nAPI Latency is **${Math.round(client.ping)}**ms.`)
    .setTimestamp();

  m.edit(embed);
}
