import { Bot } from 'grammy'
import { START_COMMAND } from './utils/commands'

const setAllCommandsList = async (bot: Bot) => {
    await bot.api.setMyCommands([
        { command: START_COMMAND, description: 'Start the bot' },
        // { command: 'help', description: 'Show help text' },
        // { command: 'settings', description: 'Open settings' },
    ])
}

export default setAllCommandsList
