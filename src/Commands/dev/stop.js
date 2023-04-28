module.exports = {
    name: 'stop',
    aliases: ['stoplife'],
    category: 'dev',
    exp: 0,
    description: 'Stop the bot',
    async execute(client, arg, M) {
        M.reply('Stopping...')
        await client.utils.stop()
    }
}