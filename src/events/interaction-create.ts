import { CacheType, Interaction } from 'discord.js'
import { commandsCol } from '../commands'

export default {
  name: 'interactionCreate',
  async execute(interaction: Interaction<CacheType>) {
    console.log(
      `${interaction.user.tag} in #${interaction?.channel} triggered an interaction.`
    )

    if (!interaction.isCommand()) return
    const command = commandsCol.get(interaction.commandName)
    if (!command) return

    try {
      await command.execute(interaction)
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      })
    }
  },
}
