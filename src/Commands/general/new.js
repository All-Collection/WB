const { getStats } = require('../../lib/stats')

module.exports = {
    name: 'admin',
    aliases: ['ad'],
    category: 'general',
    exp: 5,
    description: 'only admin',
    async execute(client, arg, M) {
        const groupMetadata = await client.groupMetadata(M.from)
        const groupMembers = groupMetadata?.participants || []
        const groupAdmins = groupMembers.filter((v) => v.admin).map((v) => v.id)
        const user = M.quoted?.participant ? M.quoted.participant : M.mentions[0] ? M.mentions[0] : M.sender

        const admin = groupAdmins.includes(user)

        if(admin == "false" )return await M.reply(
            `need admin`
        )
        await M.reply(
            `admin test`
        )










        
    }
}
