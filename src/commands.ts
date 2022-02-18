import { Collection } from 'discord.js'
import { getModules } from './find-commands'
import { Command } from './interfaces/command'

export const commandsCol = new Collection<string, Command>()

getModules('commands').forEach((command) =>
  commandsCol.set(command.data.name, command)
)
