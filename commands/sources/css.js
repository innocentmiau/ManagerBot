const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const input = args.join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription("Sent by " + message.author.username + "" + 
                    \``css\n+ input +````)
    .setAuthor("CSS", "https://i.imgur.com/562kuR6.png")
    .setColor([54, 57, 64])
    .setTimestamp();
  message.channel.send(embed);
  message.delete();
}
