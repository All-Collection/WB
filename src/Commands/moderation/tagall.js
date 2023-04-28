module.exports = {
    name: 'tagall',
    aliases: ['everyone'],
    exp: 18,
    category: 'dev',
    description: 'Tag all the users present in the group',
    async execute(client, arg, M) {
        const groupMetadata = await client.groupMetadata(M.from)
        const groupMembers = groupMetadata?.participants.map((x) => x.id) || []
        const groupAdmins = groupMetadata.participants.filter((x) => x.admin).map((x) => x.id)

        let text = `${arg !== '' ? `🧧 *Message: ${arg}*\n\n` : ''}🍀 *Group:* ${
            groupMetadata.subject
        }\n🎈 *Members:* ${groupMetadata.participants.length}\n📣 *Tagger: @${M.sender.split('@')[0]}*\n`

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
