import fs from 'fs'

export const getModules = (dir: string) => {
  const commandFiles = fs.readdirSync(`${__dirname}/${dir}`)
  const commands = []

  for (const file of commandFiles) {
    const command = require(`./${dir}/${file}`).default
    commands.push(command)
  }

  return commands
}
