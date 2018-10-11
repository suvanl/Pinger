const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync("./commands");

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Collection();

const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;

client
	.on("reconnect", () => console.log(timestamp + " Bot reconnecting..."))
	.on("error", e => console.error(timestamp + " ERROR: " + e))
	.on("warn", info => console.warn(timestamp + " WARN: " + info));

client.on("ready", () => {
	console.log(`${timestamp} Logged in as ${chalk.cyan.bold(`${client.user.tag}`)}!`);
	client.user.setActivity("the sound of pings", { type: "LISTENING" });
});


client.on("message", async message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	const args = message.content.slice(PREFIX.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== "text") {
		return message.reply("I can't execute that command in DMs! Please run this command in a server.");
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe correct usage is: \`${PREFIX}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	} else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
		console.log(`${timestamp} CMD: ${message.author.tag} ran command ${commandName}`);
	}
	catch (error) {
		console.error(error);
		message.reply("an error occurred whilst trying to execute that command!");
	}	
});

client.login(TOKEN);