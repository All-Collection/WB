module.exports = {
    name: 'restart',
    aliases: ['relife'],
    category: 'dev',
    exp: 0,
    description: 'Restarts the bot',
    async execute(client, arg, M) {
        M.reply('Restarting...')
        await client.utils.term('pm2 restart krypton')
    }

}
