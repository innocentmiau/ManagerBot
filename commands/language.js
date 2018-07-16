const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const prefix = "mb!";
  const language = db.fetch(`guild_language_${message.guild.id}`);
  if (language == null) language = 0;
  
  const nothing = Discord.RichEmbed()
    .setAuthor("Language", message.guild.iconURL)
    .setDescription("Current Language: **" + language + "**!"
                   + `\n\nUse: \`${prefix}language <new_language>\``);
  if (args.length === 0) return message.channel.send(nothing);
}
