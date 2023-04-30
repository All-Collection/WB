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
        console.log(admin)
        if(admin !== "true" )

        return await M.reply(
            `need`
        )
         await M.reply(
            `pass`
        )










        
    }
}
