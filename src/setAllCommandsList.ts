import { Bot } from 'grammy'
import { FIND_COMMAND, START_COMMAND } from './utils/commands'

const setAllCommandsList = async (bot: Bot) => {
    await bot.api.setMyCommands([
        { command: START_COMMAND, description: 'Start the bot' },
        { command: FIND_COMMAND, description: 'Fetch wiki' },
    ])
}

export default setAllCommandsList
