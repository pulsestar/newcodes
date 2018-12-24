const express = require(`express`)
const bodyParser = require (`body-parser`)
const { Botact} = require(`botact`)

const server = express()
const bot = new Botact({
    token: `b89ec6aba44675141aebb7bf4e7acbd6ccbcd7062587470670c394a4aa3f0af7d699e25288ffe3509e4db`,
    confirmation: `87a16489`
})

bot.on(function(msg) {
    console.log(msg.body)
    msg.reply(`В данный момент бот находится в разработке.
    Если вы хотите связаться с Администрацией по каким либо вопросом, напишите "Callback".
    Если у вас возникли вопросы, пишите "!инфа"`)
})

bot.event('group_join', ({ reply }) => {
    reply(`Добро пожаловать в нашу группу.
            Информация доступна по команде "!инфа"`)
  })

bot.command(`Test`, function (msg) {
    msg.reply (`Worked!`)
})
    bot.command(`Callback` || `callback`, function (msg) {
        msg.reply (`Ожидание ответа Администратора...`)
})
bot.command(`!инфа`, function (msg) {
    msg.reply (`👉 Группа создана для обсуждений, предлагаемых участниками, по поводу нашей школы, учителях и учениках.👈
    💬Бот создан для того, чтобы администрация сообщества смогла публиковать ваши предложенные новости.[В разработке] (Подробности в статье - https://vk.com/@podslushano_shk11-salam-narod-voobschem-posideli-podumali-ne-hvataet-predlozhk)💬

    И так, пройдёмся по командам.❗❗❗
    1. Предложить новость - !{Ваш текст} [В разработке] (Новость не публикуется без одобрения редакторов либо администраторов). ⚠
    2. Связаться с администрацией - {Callback || callback} [Работает] (Примерное время ожидания - до 6 часов). 🕕

    Вообщем то, на этом команды заканчиваются, мы не углубляемся в бесполезный функционал. Всё четко и по делу. ✔

    Далее пробежимся по интеграции. ♻
    Я решил,что описывать всё в одном сообщении будет глупо и неудобно, поэтому сделал чуть поболее ответов на ваши запросы.
    Для того, чтобы получить ссылку на разные веб. и соц. сети, достаточно написать их инициалы. 💠

    🔰 Discord - GG [В разработке] (Ссылка на DiscordServer нашей школы). 🔰
    🌐 Беседа ВК - Конфа [Работает] (Ссылка на беседу ВКонтакте). 🌐
    ❤ Instagram - Inst [В разработке] (Ник_нейм аккаунта Instagram). ❤
    🔷 Tweeter - Tw [В разработке] (Ник_Нейм Tweeter аккаунта). 🔷
     
    На этом интеграция заканчивается, но мб она будет больше. 🔝

    И самое важное, что я просто не мог не описать - Правила 🆗
    1: Наказуемое баном навсегда!:
    1.1 Самое важное правило, не упоминать при разговоре с учителями данную группу! 📛
    1.2 Не пересылать контент с группы: учителям, или людям, НЕ являющимися нашими участниками! ⛔
    1.3 Не спамить командами в бота! 🚫
    2: Наказуемоебаном на время:
    2.1 Оскорбление Администрации. ❕
    2.2 Порнография и шок контент. 🔞
    2.3 Оскорбление участников. ❕
    2.4 Публикация нашей группы в любой форме на своей стене. ❕
    2.5 Мультиаккаунт (Фейк будет забанен навсегда, если он нарушал правила перечисленные выше). ❕

    Напоминаем, что незнание правил, не освобождает вас от ответственности. ✖
    И кратко поясню - Все действия по событиям репостов (ТОЛЬКО РЕПОСТОВ) отслеживаются. 📳
    Поэтому не расчитывайте что администрация вас не найдёт и не накажет в случае нарушения правил)0). ✴

    Прятного времени провождения! 💖💖💖

    `)
})

bot.command(`Конфа` || `конфа`, function (msg) {
    msg.reply (`Наша беседа вконтакте - https://vk.me/join/AJQ1d28IbwvRPD955kbqH_qv`)
})
bot.command(`TW` || `tw` || `Tw` || `Inst` || `inst` || `INST` || `GG` || `gg` || `Gg` || `gG`, function (msg) {
    msg.reply (`Данная функция - В РАЗРАБОТКЕ.`)
})
bot.command('!botinfo', (ctx) => {
  if(ctx.user_id == 340656072) {
      ctx.reply (`Group_id = -175619058
      Group token = b89ec6aba44675141aebb7bf4e7acbd6ccbcd7062587470670c394a4aa3f0af7d699e25288ffe3509e4db
      Server_Confirmation = 87a16489
      Administrator_ids = id488574144 (Pavel Tsvetkov), id340656072 (Daniil Mirnyi)
      /*
*
* WARNING!
* Использование этого кода в полной мере или частично позволяется только на некоммерческих основаниях после разрешения автора.
* Для связи с автором можете использовать данные реквизиты:
* Discord: Pulse Star#7777
* VK.com:  https://vk.com/kamandi_polo
*
* Бот написан специально для группы "Подслушано в шк№11" во ВКонтакте.
*
*
* Copyright podslushano_shk11. Все права защищены.
* Нарушение авторских прав преследуется законом.
*
* CC-BY-NC-SA
* http://creativecommons.org/licenses/by-nc-sa/4.0/
*
* */`)
  }
  else {
      ctx.reply (`Error 15. (Acess Denied)`)
  }
})
bot.command('!botinfo', (ctx) => {
    if(ctx.user_id == 488574144) {
        ctx.reply (`Group_id = -175619058
        Group token = b89ec6aba44675141aebb7bf4e7acbd6ccbcd7062587470670c394a4aa3f0af7d699e25288ffe3509e4db
        Server_Confirmation = 87a16489
        Administrator_ids = id488574144 (Pavel Tsvetkov), id340656072 (Daniil Mirnyi)
        /*
  *
  * WARNING!
  * Использование этого кода в полной мере или частично позволяется только на некоммерческих основаниях после разрешения автора.
  * Для связи с автором можете использовать данные реквизиты:
  * Discord: Pulse Star#7777
  * VK.com:  https://vk.com/kamandi_polo
  *
  * Бот написан специально для группы "Подслушано в шк№11" во ВКонтакте.
  *
  *
  * Copyright podslushano_shk11. Все права защищены.
  * Нарушение авторских прав преследуется законом.
  *
  * CC-BY-NC-SA
  * http://creativecommons.org/licenses/by-nc-sa/4.0/
  *
  * */`)
    }
    else {
        ctx.reply (`Error 15. (Acess Denied)`)
    }
  })

server.use(bodyParser.json())

server.post(`/`, bot.listen)

server.listen(80)