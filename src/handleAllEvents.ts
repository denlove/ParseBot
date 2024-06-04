import { Bot } from 'grammy'

const handleAllEvents = (bot: Bot) => {
    bot.on('message', async ctx => {
        ctx.reply('Message received :D')
    })
}

export default handleAllEvents
