const fs = require('fs');
const Discord = require('discord.js');
const Client = require('./client/Client');
const config = require('./config.json');
const {Player} = require('discord-player');
const clientListenner = require('./listenners/clientListenner');
const playerListenner = require('./listenners/playerListenner');

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands')
.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const player = new Player(client);

clientListenner(player, client)
playerListenner(player)

client.login(config.token);