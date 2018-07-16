const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on("ready", () => {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`jb!help | ${client.guilds.size} servers!`, {type: 'Playing'});
});

client.login(process.env.TOKEN);
