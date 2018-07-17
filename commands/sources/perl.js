const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const input = args.join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription("Sent by " + message.author.username + "" + 
                    \``perl\n+ input +````)
    .setAuthor("Perl", "https://i.imgur.com/G5joYeo.png")
    .setColor([54, 57, 64])
    .setTimestamp();
  message.channel.send(embed);
  message.delete();
}
