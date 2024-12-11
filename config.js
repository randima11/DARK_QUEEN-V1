/*
██████╗  █████╗ ██████╗ ██╗  ██╗     ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝    ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
██║  ██║███████║██████╔╝█████╔╝     ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║
██║  ██║██╔══██║██╔══██╗██╔═██╗     ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║
██████╔╝██║  ██║██║  ██║██║  ██╗    ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝
created by manisha sasmitha                                                                                 
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mzhUADpQ#VsYlv0gVCeD1UlNhVtlaQlQUCU0kUSd0nv0tIcq0jSE",  //paste your session_id
MODE: process.env.MODE || "public",
OWNER_REACT: process.env.OWNER_REACT || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
BOT_NAME: process.env.BOT_NAME || "DARK_QUEEN",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/v1k9r3.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "╔═══════✮❁•°♛°•❁✮════════╗\n\n 𝐃𝐀𝐑𝐊 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐈𝐕𝐄 🩷...\n\n═══════✮❁•°♛°•❁✮═══════\n\n`ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴀᴄᴛɪᴠᴇ.`✅\n\n═══════✮❁•°♛°•❁✮═══════\n\n `ᴏᴡɴᴇʀ : ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`\n\n═══════✮❁•°♛°•❁✮═══════\n\n `ʙᴏᴛ : ᴅᴀʀᴋ_Qᴜᴇᴇɴ`\n\n═══════✮❁•°♛°•❁✮═══════\n\n ᴡʜᴀᴛꜱᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/IEEUnyvlnCqDeuFw1DEsWk\n\n═══════✮❁•°♛°•❁✮═══════\n\n 💬 ᴇɴᴏʏ ᴛʜᴇ ᴅᴀʀᴋ_Qᴜᴇᴇɴ ʙᴏᴛ 🩷 ....\n\n > ᴅᴀʀᴋ_Qᴜᴇᴇɴ \n\n ╚═══════✮❁•°♛°•❁✮════════╝",
};
