const Discord = require("discord.js");
const db = require('quick.db');
const utils = require("../utils.js");

exports.run = (client, message, args) => {
  message.channel.send("__**Bot's Offical Server:**__\nhttps://discord.gg/KZzVW9a");
  var language = await db.fetch(`guild_language_${message.guild.id}`);
  if (language === null) language = 0;
  if (language === 0) {
    message.channel.send("__**BOT's Offical Server:**__\nhttps://discord.gg/KZzVW9a");
  } else if (language === 1) {
      message.channel.send("__**Servidor Oficial do BOT:**__\nhttps://discord.gg/KZzVW9a");
    }
}
