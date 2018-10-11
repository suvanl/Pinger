const moment = require("moment");
const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;

module.exports = {
	name: "ping",
	description: "Repeatedly pings the author of this command",
	cooldown: 5,
	async execute(message) {
		let i = 0;
		try {
			var pings = setInterval(function() { // eslint-disable-line no-unused-vars
				const index = ++i;
				console.log(`${timestamp} PING: ${index}`);
				// if (index === 6) {
				// 	clearInterval(pings);
				// 	return console.log(`${timestamp} PING: Stopped.`);
				// }
				message.channel.send(`Pinging ${message.author}! (${index})`);
			}, 1500);
		} catch (error) {
			console.error(`${timestamp} ERROR: ${error.stack}`);
			message.channel.send("An error occurred.");
		}
	}
};