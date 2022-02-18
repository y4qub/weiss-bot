/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { SlashCommandBuilder } from '@discordjs/builders'
import { Command } from '../interfaces/command'

const play: Command = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays a song!'),
  async execute(interaction) {
    await interaction.reply('Pong!')
  },
}

export default play
