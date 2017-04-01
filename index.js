const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAC0PqQYEzIBALCAtfa8MwYFf93SSi2NMNPppistrNdbH8aMoIDOgkYoEzzts8IIavjGgrhQkQMdfWC7CbS2Wl0ygoLZCmhTo1MjgA2rSpR6CLHliJqXQ8udnGFWrDP7dlYw41GyYBUuwpmHdragNiqK1iYbZBLQF31Li2agZDZD',
  verify: 'movie_bot',
  app_secret: '4ca67f7da8a7a8ed09936144d5ebfbf0'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')

