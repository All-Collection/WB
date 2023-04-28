const axios = require('axios')

module.exports = {
    name: 'neko',
    aliases: ['catgirl'],
    category: 'weeb',
    exp: 10,
    description: 'Sends an image of random neko',
    async execute(client, arg, M) {
        const res = await axios.get(`https://api.waifu.pics/sfw/neko`).catch((err) => {
            return M.reply(err.toString())
            client.log(err, 'red')
        })

        let buttons = [
            {
              buttonId: `${client.prefix}owner`,
              buttonText: { displayText: "🧣 Bot Owner 🧣" },
              type: 1,
            },
            {
              buttonId: `${client.prefix}repo`,
              buttonText: { displayText: "🧩 Source Code 🧩" },
              type: 1,
            },
            {
              buttonId: `${client.prefix}play hi`,
              buttonText: { displayText: `🔖 Song of the day 🔖` },
              type: 1,
            },
          ];
          let buttonMessage = {
            video: { url: "https://media.tenor.com/q0iOtisXZ0oAAAPo/anime-girl.mp4" },
            gifPlayback: true,
            caption: "textHelpMenu",
            buttons: buttons,
            footer: "hi",
            headerType: 4,
          };






        client.sendMessage(M.from,buttonMessage )
    }
}
