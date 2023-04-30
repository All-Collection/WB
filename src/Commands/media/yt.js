const YT = require('../../lib/YT')
const yts = require('yt-search')

module.exports = {
    name: 'Youtube',
    aliases: ['yt'],
    category: 'media',
    exp: 5,
    description: 'Downloads given YT Link and sends  Audio/ Video',
    async execute(client, arg, M) {
        
        
        if (!arg) return M.reply('Please use this command with a valid youtube.com link')
        const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/
        const term = validPathDomains.test(arg)
        if (!term) return M.reply('Please use this command with a valid youtube contant link')
        if (!YT.validateURL(term.trim())) return M.reply('Please use this command with a valid youtube.com link')
        const { videoDetails } = await YT.getInfo(term)
        
        let text = `*${videoDetails.title}*\n${videoDetails.ownerChannelName}`
console.log(videoDetails.video_url)
     
   







    }



}