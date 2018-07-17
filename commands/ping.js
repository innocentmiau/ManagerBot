exports.run = async (client, message, args) => {
	const m = await message.channel.send("Calculating...");
  const Discord = require('discord.js');
  let embed = new Discord.RichEmbed()
    .setAuthor("Latency!", client.user.displayAvatarURL)
    .setColor([54, 57, 64])
    .setDescription(`Pong! :ping_pong: \nLatency is **${m.createdTimestamp - message.createdTimestamp}**ms.\nAPI Latency is **${Math.round(client.ping)}**ms.`)
    .setTimestamp();

  m.edit(embed);
}
