module.exports = {
    name: "about",
    description: "Bot latency and API response times",
    aliases: ["info", "botinfo"],
    cooldown: 3,
    async execute(message) {
        message.channel.send(`
        Hey **${message.author.username}**, I'm a bot that likes to spam-ping.
        **Source code and installation instructions:** https://github.com/suvanl/Pinger
        `);
    }
};