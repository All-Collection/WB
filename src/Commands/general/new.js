const { getStats } = require('../../lib/stats')



module.exports = {
    name: 'admin',
    aliases: ['ad'],
    category: 'dev',
    exp: 5,
    description: 'only admin',
    async execute(client, arg, M) {


        if (!groupAdmins.includes(client.user.id.split(':')[0] + '@s.whatsapp.net') && command.category == 'moderation')
            return M.reply('This command can only be used when bot is admin')
    
        await M.reply(
            `f`
        )
    










        
    }
}
