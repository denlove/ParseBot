import { Bot } from 'grammy'
import dotenv from 'dotenv'
import setAllCommandsList from './setAllCommandsList'
import handleAllCommands from './handleAllCommands'
import handleAllEvents from './handleAllEvents'

dotenv.config()

const main = async () => {
    const bot = new Bot(process.env.TOKEN!)

    await setAllCommandsList(bot)
    handleAllCommands(bot)
    handleAllEvents(bot)

    bot.start()
}

main()
