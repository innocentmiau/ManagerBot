const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const input = args.join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription("Sent by **" + message.author.username + "**" + 
                    `\`\`\`php\n` + input + `\`\`\``)
    .setAuthor("Php", "https://i.imgur.com/zYG0jdZ.png")
    .setColor([54, 57, 64])
    .setTimestamp();
  message.channel.send(embed);
  message.delete();
}
