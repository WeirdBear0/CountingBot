
const keepAlive = require('./server.js')
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

var numArray = [{ 'num': 0, 'author': 'bot' }]

var highScore = 0

client.once('ready', () => {
  console.log('Counting Bot is online!')
})

client.on('messageCreate', message => {
  lengthOfArr = numArray.length
  if (!isNaN(message.content) && message.channel.id == 975247739355013160) {
    if (message.content - 1 == numArray[lengthOfArr - 1].num && message.author.id != numArray[lengthOfArr - 1].author) {
      numArray.push({ 'num': message.content, 'author': message.author.id })
      message.react('✅')
    }
    else {
      message.react('❌')
      if (lengthOfArr > highScore) {
        highScore = lengthOfArr - 1
      }
      message.channel.send(`Whoops! Try Again. Your Score Was ${lengthOfArr - 1}. All Time High: ${highScore}`)
      numArray = [{ 'num': 0, 'author': 'bot' }]
    }
  }

})

client.login('token')
keepAlive();
