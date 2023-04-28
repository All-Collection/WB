module.exports = {
    name: 'start',
    aliases: ['life'],
    category: 'dev',
    exp: 0,
    description: 'PM2 the bot',
    async execute(client, arg, M) {
        M.reply('starting...')
        await client.utils.start()
    }
    
}