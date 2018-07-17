const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const input = args.join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription("Sent by **" + message.author.username + "**" + 
                    `\`\`\`js\n` + input + `\`\`\``)
    .setAuthor("JavaScript", "https://i.imgur.com/Gu8TdLn.png")
    .setColor([54, 57, 64])
    .setTimestamp();
  message.channel.send(embed);
  message.delete();
}
