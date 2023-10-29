const {Telegraf} = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
    console.log("Запросили команду /start")
    try {
        ctx.reply("Круто!! Вы подключены к сервису Netlify.")
    } catch(e) {
        console.error("Ошибка в команде /start")
        ctx.reply("Извините, произошла ошибка.")
    }
})

bot.on('text', ctx => {
    console.log("Пользователь отправил текстовое сообщение")
    try {
        ctx.reply("Вы написали текст, поздравляю!")
    } catch(e) {
        console.error("Ошибка в вводе текста")
        ctx.reply("Извините, произошла ошибка.")
    }
})

exports.handler = async event => { 
    try {
        await bot.handleUpdate(JSON.parse(event.body))
        return { statusCode: 200, body: ""}
    } catch(e) {
        console.error("Ошибка в 'handler' ", e)
        return { StatusCode: 400, body:"This endpoint is meant for bot and telegram communication"}
    }
}