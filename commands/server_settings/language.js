const Discord = require('discord.js');
const db = require('quick.db');
const utils = require("../utils.js");

exports.run = async(client, message, args) => {
  const prefix = "mb!";
  var language = await db.fetch(`guild_language_${message.guild.id}`);
  if (language === null) language = 0;
  
  if (args.length === 0) {
    if (language === 0) {
       const nothing = new Discord.RichEmbed()
      .setAuthor("Language", message.guild.iconURL)
      .setColor([54, 57, 64])
      .setDescription(`Current Language: **${utils.getLanguage(language)}**!`
                     + `\n\nUse: \`${prefix}language <new_language>\``);
       message.channel.send(nothing);
    } else if (language === 1) {
      const nothing = new Discord.RichEmbed()
      .setAuthor("Linguagem", message.guild.iconURL)
      .setColor([54, 57, 64])
      .setDescription(`Linguagem Atual: **${utils.getLanguage(language)}**!`
                     + `\n\nUso: \`${prefix}language <nova_linguagem>\``);
      message.channel.send(nothing);
    }
  }
  
  if (args.length === 1) {
    if (language === 1) {
      let amount = parseInt(args[0]);
      if (Number.isInteger(amount)) {
        db.set(`guild_language_${message.guild.id}`, amount);
        language = await db.fetch(`guild_language_${message.guild.id}`);
          if (language === 0) {
              message.channel.send(`New language **${utils.getLanguage(language)}**!`);
          } else if (language === 1) {
              message.channel.send(`Nova linguagem **${utils.getLanguagePT(language)}**!`);
          }
      }
    } else if (language === 0) {
        let amount = parseInt(args[0]);
          if (Number.isInteger(amount)) {
            db.set(`guild_language_${message.guild.id}`, amount);
            language = await db.fetch(`guild_language_${message.guild.id}`);
            if (language === 0) {
                message.channel.send(`New language **${utils.getLanguage(language)}**!`);
            } else if (language === 1) {
                message.channel.send(`Nova linguagem **${utils.getLanguagePT(language)}**!`);
            }
          }
      }
  }
}
