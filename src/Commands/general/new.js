const { getStats } = require('../../lib/stats')

const groupAdmins = groupMembers.filter((v) => v.admin).map((v) => v.id)

module.exports = {
    name: 'admin',
    aliases: ['ad'],
    category: 'dev',
    exp: 5,
    description: 'only admin',
    async execute(client, arg, M) {


        if (!groupAdmins.includes(sender))
        return M.reply('This command can only be used by group or community admins')
    
        await M.reply(
            `f`
        )
    










        
    }
}
