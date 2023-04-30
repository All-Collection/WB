const simpleGit = require('simple-git')
const git = simpleGit()

module.exports = {
    name: 'update',
    aliases: ['upnow','up'],
    category: 'dev',
    exp: 0,
    description: 'Updates gives the list of latest commits and updatenow updates the bot',
    async execute(client, arg, M) {
        const command = M.body.split(' ')[0].toLowerCase().slice(client.prefix.length).trim()
        await git.fetch()
        const commits = await git.log(['main' + '..origin/' + 'main'])
        if (command == 'update') {
            let updates = '======= *UPDATES* =======\n\n'
            if (commits.total == 0) return M.reply('Sorry there is no new updates!!')
            commits['all'].map((commit) => {
                updates +=
                    '```🔹 [' +
                    commit.date.substring(0, 10) +
                    ']: ' +
                    commit.message +
                    ' <' +
                    commit.author_name +
                    '>```\n'
            })

            let buttons = [
                {
                  buttonId: `${client.prefix}upnow`,
                  buttonText: { displayText: "📲 Update 📲" },
                  type: 1,
                },
                {
                  buttonId: `${client.prefix}restart`,
                  buttonText: { displayText: "♻️ Restart ♻️" },
                  type: 1,
                },
                {
                  buttonId: `${client.prefix}up`,
                  buttonText: { displayText: `🔎 Check again 🔎` },
                  type: 1,
                },
              ];
              let buttonMessage = {
                text: "updates",
                buttons: buttons,
                footer: "hi",
                headerType: 4,
              };

              client.sendMessage(M.from,buttonMessage )







        }
        if (command == 'up') {
            let updates = '======= *UPDATES* =======\n\n'
            if (commits.total == 0) return M.reply('Sorry there is no new updates!!')
            commits['all'].map((commit) => {
                updates +=
                    '```🔹 [' +
                    commit.date.substring(0, 10) +
                    ']: ' +
                    commit.message +
                    ' <' +
                    commit.author_name +
                    '>```\n'
            })
            M.reply(updates)
        }
        if (command == 'upnow') {
            if (commits.total == 0) return M.reply('You are already using the updated version')
            git.pull(async (err, update) => {
                if (update && update.summary.changes) {
                    await M.reply('```Updateing....```')
                    await client.utils.term('git pull')
                    await M.reply('```.```')
                    await M.reply('```..```')
                    await M.reply('```...```')
                    await M.reply('Restarting...')
                    await client.utils.term('pm2 restart krypton')
                } else if (err) return M.reply(err)
            })
        }
    }
    
}
