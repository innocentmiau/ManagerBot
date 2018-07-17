const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const input = args.join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription("Sent by " + message.author.username + "" + 
                    \``ruby\n+ input +````)
    .setAuthor("Ruby", "https://i.imgur.com/RR3VO4Y.png")
    .setColor([54, 57, 64])
    .setTimestamp();
  message.channel.send(embed);
  message.delete();
}
