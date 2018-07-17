const Discord = require('discord.js');
const db = require('quick.db');
const utils = require("../utils.js");

exports.run = async (client, message, args) => { 
  var language = await db.fetch(`guild_language_${message.guild.id}`);
  if (language === null) language = 0;
  if (language === 0) {
    const m = await message.channel.send("Calculating...");
    let embed = new Discord.RichEmbed()
      .setAuthor("Latency!", client.user.displayAvatarURL)
      .setColor([54, 57, 64])
      .setDescription(`Pong! :ping_pong: \nLatency: **${m.createdTimestamp - message.createdTimestamp}**ms.\nAPI Latency: **${Math.round(client.ping)}**ms.`)
      .setTimestamp();
    m.edit(embed);
  } else if (language === 1) {
      const m = await message.channel.send("A Calcular...");
      let embed = new Discord.RichEmbed()
        .setAuthor("Latencia!", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription(`Pong! :ping_pong: \nLatencia: **${m.createdTimestamp - message.createdTimestamp}**ms.\nLatencia do API: **${Math.round(client.ping)}**ms.`)
        .setTimestamp();
      m.edit(embed);
    }
}
