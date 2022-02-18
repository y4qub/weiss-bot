import dotenv from 'dotenv'
import { Client, Intents } from 'discord.js'
import { getModules } from './find-commands'

dotenv.config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const events = getModules('events')

events.forEach((e) => {
  if (e.once) {
    client.once(e.name, async (...args) => await e.execute(...args))
  } else {
    client.on(e.name, async (...args) => await e.execute(...args))
  }
})

client.login(process.env.DISCORD_TOKEN)
