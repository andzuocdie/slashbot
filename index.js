const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const command_handler = require("./loadslash");
const {token} = require('./config/token.json');
const {
    version
} = require('./package.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { Collection } = require('discord.js')
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
client.once('ready', () => {
  console.log("Uchiha Online ")
  console.log(`Version: 3.1`);
  command_handler.initCommands(client);
  client.user.setPresence({ activities: [{ name: `Uchiha Vip Pro:)) ` }], status: 'idle' });
});
client.login(token)

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'LỖI RỒI HUHU:((!', ephemeral: true });
	}
});