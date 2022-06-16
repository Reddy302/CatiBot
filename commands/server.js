const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Info about this server!'),
	async execute(interaction) {
		await interaction.reply(`**Server name:** ${interaction.guild.name}\n**Total members:** ${interaction.guild.memberCount}`);
	},
};