const { PREFIX } = require("../config");
const moment = require("moment");
const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;

module.exports = {
    name: "help",
    description: "Sends a list of all of my commands or info about a specific command",
    aliases: ["h", "commands"],
    usage: "help [command name]",
    cooldown: 5,
    async execute(message, args) {
        const { commands } = message.client;
        const data = [];

        if (!args.length) {
            data.push("Here's a list of all my commands:");
            data.push(commands.map(command => `• ${PREFIX}` + command.name).join("\n"));
            data.push(`\nUse \`${PREFIX}help [command name]\` to see help for a specific command.`);
        } else {
            if (!commands.has(args[0])) {
                return message.channel.send("That's not a valid command. Are you sure you typed it correctly?");
            }

            const command = commands.get(args[0]);

            data.push(`Name: **${command.name}**`);

            if (command.description) data.push(`Description: **${command.description}**`);
            if (command.aliases) data.push(`Description: **${command.aliases.join(", ")}**`);
            if (command.usage) data.push(`Usage: **${command.usage}**`);

            data.push(`Cooldown: **${command.cooldown || 3} second(s)**`);
        }

        message.author.send(data, { split: true })
            .then(() => {
                if (message.channel.type !== "dm") message.reply("sending a list of commands your DMs... 📝");
            })
            .catch(error => console.error(`${timestamp} ${error}`));
    }
};