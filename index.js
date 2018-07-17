const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on("ready", () => {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`mb!help | ${client.guilds.size} servers!`, {type: 'Playing'});
});

client.on("message", async message => {
	let msg = message.content.toLowerCase();
	if (message.author.bot) return undefined;
	
	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	try {
		let commands = require(`./commands/${command}.js`);
		commands.run(client, message, args);
	} catch(e) {
		try {
			let commands = require(`./commands/server_settings/${command}.js`);
			commands.run(client, message, args);
		} catch(e) {
			console.log(e);
		} finally {
		}
	} finally {
	}
});

client.login(process.env.TOKEN);
