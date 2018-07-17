const Discord = require('discord.js');

exports.run = (client, message, args) => {
		if (args.length === 0) {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=468548282746929173&scope=bot&permissions=372632702)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/KZzVW9a)"
                       + "\n\nType `mb!help <topic>` for getting the list of commands!"
                       + "\n\n__**TOPICS:**__")
        .addField("General", "Commands that can be used for everyone!", false)
        .addField("Settings", "Know commands to configure bot on your discord server!", false)
        .addField("Random", "Commands being used for get a random image of something!", false)
        .addField("Music", "Commands comming soon.", false)
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'general') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help General", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=468548282746929173&scope=bot&permissions=372632702)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/KZzVW9a)"
                       + "\n**mb!support** - Get bot's server link! (aliases: `support`)"
                       + "\n**mb!ping** - Get bot's ping!")
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'settings') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help Settings", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=468548282746929173&scope=bot&permissions=372632702)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/KZzVW9a)"
                       + "\n\nComing soon..."
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'random') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help Random", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=468548282746929173&scope=bot&permissions=372632702)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/KZzVW9a)"
                       + "\n\nComing soon...")
        .setTimestamp();
      message.channel.send(embed);
    }
    if (args.length === 1 && args[0].toLowerCase() == 'music') {
      const embed = new Discord.RichEmbed()
        .setAuthor("Help Music", client.user.displayAvatarURL)
        .setColor([54, 57, 64])
        .setDescription("Invite: [here](https://discordapp.com/oauth2/authorize?client_id=464571851608162304&scope=bot&permissions=126016)"
                       + "\t\t\t\tOfficial Server: [here](https://discord.gg/KZzVW9a)"
                       + "\n\nComing soon...")
        .setTimestamp();
      message.channel.send(embed);
    }
}
