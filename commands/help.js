const Discord = require('discord.js');

exports.run = (client, message, args) => {
		if (args.length === 0) {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/4ZAs9Sr)"
                       + "\n\nType `mb!help <topic>` for getting the list of commands!"
                       + "\n\n__**TOPICS:**__")
        .setTimestamp();
      message.channel.send(embed);
}
