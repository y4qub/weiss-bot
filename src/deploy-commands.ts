import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import dotenv from 'dotenv'
import { getModules } from './find-commands'
dotenv.config()

const { DISCORD_TOKEN, DISCORD_GUILD_ID, DISCORD_CLIENT_ID } = process.env

const commands = getModules('commands').map((command) => command.data.toJSON())

if (!(DISCORD_TOKEN && DISCORD_CLIENT_ID && DISCORD_GUILD_ID))
  throw new Error('Missing env')

const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN)

rest
  .put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID), {
    body: commands,
  })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
