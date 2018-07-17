exports.run = (client, message, args) => {
    if (message.author.id === "197340056053219329" || message.author.id === "334731457945796609") {
      if (args.length === 0 || args.length === 1) {
        message.channel.send("**" + message.author.username + "**, use: `mb!sayc <chat_id> <message>`");
      } else {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
        say = say.replace(args[0] + " ", "");
        client.channels.get(args[0]).send(say);
      } 
    } else {
      message.channel.send("**" + message.author.username + "**, I'm sorry but you need to be the bot owner!");
    }
}
