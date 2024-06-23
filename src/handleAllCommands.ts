import { Bot } from 'grammy'
import { FIND_COMMAND, START_COMMAND } from './utils/commands'

const handleAllCommands = (bot: Bot) => {
    bot.command(START_COMMAND, async ctx => {
        await ctx.reply('Welcome! Success start')
        await ctx.react('🎉')
    })

    bot.command(FIND_COMMAND, async ctx => {
        await ctx.reply('Please, input wiki requested title')
        await ctx.react('👀')
    })
}

export default handleAllCommands
