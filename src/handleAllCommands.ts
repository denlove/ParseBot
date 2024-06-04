import { Bot } from 'grammy'
import { START_COMMAND } from './utils/commands'

const handleAllCommands = (bot: Bot) => {
    bot.command(START_COMMAND, async ctx => {
        await ctx.reply('Welcome! Success start')
        await ctx.react('🎉')
    })
}

export default handleAllCommands
