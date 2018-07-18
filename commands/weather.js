const request = require (‘request’);
<put ur module.exports in>

const query = args.join(“ “);

var weather = {
url: `http://api.tanvis.xyz/weather/{query}`
method: 'GET'
}
function callback (error, response, body) {
if (error) {
msg.channel.send(“woops got an error somewhere gotta check”)}

if (!error && response.statusCode == 200) {
body = JSON.parse(body);
 
if (body.error) {
return msg.channel.send(`cant find location for ${query}`)
}

const embed = new Discord.RichEmbed()
.setTitle(`Weather for ${body.name}`)
.addField(`Celsius:`, `${body.celsius}`)
.addField(`Fahrenheit:`, `${body.fahrenheit}`)
.addField(`Wind Speed:`, `${body. windSpeed}`)
return msg.channel.send(embed)
}
request (weather, callback)
