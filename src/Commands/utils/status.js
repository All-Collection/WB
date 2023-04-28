
module.exports = {
    name: 'status',
    aliases: ['st,down'],
    category: 'dev',
    exp: 15,
    description: 'sticker [caption/quote message containing media] <pack> | <author>',
    async execute(client, arg, M) {
        const content = JSON.stringify(M.quoted)
        const isMedia = M.type === 'imageMessage' || M.type === 'videoMessage'
        const isQuoted =
            (M.type === 'extendedTextMessage' && content.includes('imageMessage')) ||
            (M.type === 'extendedTextMessage' && content.includes('videoMessage'))

        if (isMedia || isQuoted) {
            const buffer = isQuoted ? await M.quoted.download() : await M.download()
            

            await client.sendMessage(
                M.from, buffer
              
            )
        } else return M.reply('Please quote the image/video')
        // console.log(buffer)
    }
}
