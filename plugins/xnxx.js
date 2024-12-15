const cheerio = require("cheerio");
const axios = require("axios");
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

  if (!anchors || !anchors.length) return;







    

} catch (error) {
    return reply('*`Error Download Vide.`*');
  await m.react('❌');
  }
}catch(e){
console.log(e)
  reply(`${e}`)
}
});
