const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');
//this part of the code makes the commands visible on the guild server, a bit of code editing should make it go globle, but it can have a delay of up to one hour
const commands = [
    new SlashCommandBuilder().setName('interactiontest').setDescription('A test for string passthough').addStringOption(option => option.setName('textinput').setDescription('with any luck it will return what you type here back at you').setRequired(true)),
    new SlashCommandBuilder().setName('heyjerry').setDescription('Asks Jerry a Question').addStringOption(option => option.setName('question').setDescription('what you want to ask Jerry').setRequired(true)),
    new SlashCommandBuilder().setName('heykaitlyn').setDescription('Asks Kaitlyn a Question').addStringOption(option => option.setName('question').setDescription('what you want to ask Kaitlyn').setRequired(true)),
    new SlashCommandBuilder().setName('about').setDescription('Replies with info about the bot'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);