const { fetchJson } = require('../lib/functions')
const {cmd , commands} = require('../command')
cmd({
    pattern: "xnxx",
    react: "🔞",
    desc: "xnxx video download",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me few word")  

let desc = `
Title: ${data.title} 
Duration: ${data.timestamp} 
Views: ${data.views} 
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${DARK_QUEEN}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
