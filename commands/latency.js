const moment = require("moment");
const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;

module.exports = {
	name: "latency",
	description: "Bot latency and API response times",
	cooldown: 5,
	async execute(message) {
		try {
            const msg = await message.channel.send("Ping! 🏓");
            msg.edit(`Pong! 🏓\nMessage roundtrip took: \`${msg.createdTimestamp - message.createdTimestamp}ms\`.`);
        } catch (error) {
            console.error(`${timestamp} ${error}`);
        }
	}
};