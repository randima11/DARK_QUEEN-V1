const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "*ᴅᴀʀᴋ_Qᴜᴇᴇɴ-ᴠ1*";

//twitter dl (x)
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    desc: "download tw videos",
    category: "download",
    react: "📩",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me twitter url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`)
        reply("*ᴅᴀʀᴋ_Qᴜᴇᴇɴ-ᴠ1 ᴛᴡɪᴛᴛᴇʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ📥*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `- HD\n\n ${yourName}` }, { quoted: mek })
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `- SD \n\n ${yourName}` }, { quoted: mek })  
        //send audio    
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

//gdrive(google drive) dl
cmd({
    pattern: "gdrive",
    alias: ["googledrive"],
    desc: "download gdrive files",
    category: "download",
    react: "📩",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me gdrive url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("*ᴅᴀʀᴋ_Qᴜᴇᴇɴ-ᴠ1 ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ꜰɪʟᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ.📥*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `${data.data.fileName}\n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

const apilink = 'https://www.dark-yasiya-api.site/download/mfire?ur' // API LINK ( DO NOT CHANGE THIS!! )


cmd({
    pattern: "mfire",
    alias: ["mf","mediafire"],
    react: "🔥",
    desc: "",
    category: "download",
    use: '.mfire < mediafire url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("PLEASE GIVE ME URL");
  if(!q.includes('mediafire.com')) return await reply("This url is invalid");
  
const mfire = await fetchJson(`${apilink}/download/mfire?url=${q}`);
  
const msg = `
           *乂 ᴅᴀʀᴋ_Qᴜᴇᴇɴ-ᴠ1 ᴍᴇᴅɪᴀꜰɪʀᴇ ᴅᴏᴡɴʟᴏᴀᴅ * 


• *𝖥𝗂𝗅𝖾 𝖭𝖺𝗆𝖾* - ${mfire.result.fileName}

• *𝖥𝗂𝗅𝖾 𝖲𝗂𝗓𝖾* - ${mfire.result.size}

• *𝖴𝗉𝗅𝗈𝖺𝖽 𝖣𝖺𝗍𝖾 𝖠𝗇𝖽 𝖳𝗂𝗆𝖾* - ${mfire.result.date}

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`

       // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: msg,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: ' ᴍᴀɴɪꜱʜᴀ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `ᴅᴀʀᴋ_Qᴜᴇᴇɴ-ᴠ1 ᴍᴇᴅɪᴀꜰɪʀᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: `https://i.ibb.co/dPw1fHD/mfire.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });
  
// SEND FILE
await conn.sendMessage(from, { document: { url: mfire.result.dl_link }, mimetype: mfire.result.fileType , fileName: mfire.result.fileName, caption: mfire.result.fileName }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply('THIS URL TYPE IS NOT WORKING !!')
}
})
