module.exports = {
    name: 'tagall',
    aliases: ['tg'],
    exp: 18,
    category: 'dev',
    description: 'Tag all the users present in the group',
    async execute(client, arg, M) {
        const groupMetadata = await client.groupMetadata(M.from)
        const groupMembers = groupMetadata?.participants.map((x) => x.id) || []
        const groupAdmins = groupMetadata.participants.filter((x) => x.admin).map((x) => x.id)

        let text = `${arg !== '' ? `${arg}` : ''}`

        const admins = []
        const members = []

        for (const jid of groupMembers) {
            if (groupAdmins.includes(jid)) {
                admins.push(jid)
                continue
            }
            members.push(jid)
        }

        await client.sendMessage(M.from, { text, mentions: groupMembers }, { quoted: M })
    }
}
