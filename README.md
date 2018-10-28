# Pinger

**A very simple Discord bot for people who (somehow) like to be spammed with pings**

[![Build Status](https://travis-ci.org/suvanl/Pinger.svg?branch=master)](https://travis-ci.org/suvanl/Pinger)

----------

## What does it do?
Once the **`ping`** command has been run, the bot will ping you once every 1.5 seconds.

## FAQ
- Will it ever stop pinging me? No. 
- So how do I stop it pinging me? Stop the bot.
- Can this bot spam-ping others? No, it will only ping whoever runs the `ping` command.
- Is this a selfbot? No.
- Can I use this as a selfbot? No. [The use of selfbots is forbidden by Discord](https://support.discordapp.com/hc/en-us/articles/115002192352).

## Setup & self-hosting info
**Prerequisites**
- git (optional) - [download here](https://git-scm.com/downloads)
- Node.js (version 8 or higher*) - [download here](https://nodejs.org/en/)

### Creating a bot account
1. Head to https://discordapp.com/developers/applications/.
2. Hit "Create an application".
3. Go to the ["Bot" page](https://vgy.me/M8axSa.png), and click "Add bot".

### Adding the bot to your server
1. Use a Discord bot permissions calculator, such as [this one](https://finitereality.github.io/permissions-calculator/?v=0). Choose the permissions you'd like the bot to have.
2. Copy and paste your bot's client ID into the permissions calculator (the client ID can be found on the Discord bot application page), and click "Add". **You can use the link you'll be sent to as your bot's invite link, if you'd like to share it with others.**

### Downloading and installing the bot
1. Click the [Clone or download button](https://vgy.me/nSL8xK.png) on this page, and select "Download ZIP", and unzip the files once downloaded. Alternatively, you can [clone the repository](https://help.github.com/articles/cloning-a-repository/) using git.
2. Open the "**config.js.example**" file in any text editor (e.g. Visual Studio Code, Atom, Notepad++ or Notepad), and replace `TOKEN-HERE` with your bot's token from the Discord bot application page, and replace `PREFIX-HERE` with your desired command prefix for the bot. **Do not change anything else in this file.**
3. Rename the file to `config.js`.
4. Open a terminal window in the directory the (unzipped) bot files are in (e.g. Command Prompt/PowerShell on Windows, Terminal on macOS, etc).
5. Run `npm install --production`. If you'd like to work on developing this bot, you should just run `npm install`.

### Starting and stopping the bot
1. Once everything has been installed, run `npm start` or `node index.js` (both do the same thing) to start the bot.
2. To stop the bot, press **Ctrl** + **C** in the terminal session.

----------

<sup>* this bot was built using Node.js 9.11.2, but versions 8.x.x and 10.x.x should work fine too. If you encounter any issues caused by the use of these versions, please [open an issue](https://github.com/suvanl/Pinger/issues).</sup>

## License
Licensed under the [MIT License](https://github.com/suvanl/Pinger/blob/master/LICENSE).

<sup>Please use this bot at your own risk. I am not responsible and cannot be held liable if you somehow break Discord's ToS through the use of this bot.</sup>