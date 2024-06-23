import { Bot } from 'grammy'
import { fetchData } from './utils/fetchData'
import { formatData } from './utils/formatData'
// import { writeIntoFile } from './utils/writeIntoFile'

const handleAllEvents = (bot: Bot) => {
    bot.on('message', async ctx => {
        const path = ctx.message.text
        const resp = await fetchData(`https://en.wikipedia.org/wiki/${path}`)
            .then(data => data)
            .catch(err => err)
        const formattedResp = formatData(resp) as string
        ctx.reply(formattedResp)

        // await bot.api.sendMessage((await bot.api.getMe()).id, '<p>H<b>ello</b></p>', {
        //     parse_mode: 'HTML',
        // })
    })
}

export default handleAllEvents
