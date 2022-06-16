const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Info about YOU!'),
	async execute(interaction) {
		await interaction.reply(`**Your tag:** ${interaction.user.tag}\n**Your id:** ${interaction.user.id}`);
	},
};