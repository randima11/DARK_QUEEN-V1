const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "mzhUADpQ#VsYlv0gVCeD1UlNhVtlaQlQUCU0kUSd0nv0tIcq0jSE",  // ADD Your Session Id 
MODE: process.env.MODE || "privat",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //add true or false
BOT_NAME: process.env.BOT_NAME || "DARK_QUEEN",
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!CUSTOM-SETTING-CONFIG=====================
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", //add true or false
AUTO_REACT: process.env.AUTO_REACT || "true", //add true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //add true or false
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!API-CONFIG=================================
///===============================================DONT-CHANGE-API=========================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
///=================ඕවා එඩිට් කරද්දි කිසිම දෙයක් වැරදියට දමන්න එපා !!ALIVE-CONFIG================================
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/v1k9r3.jpg", //add alive img url
ALIVE_MSG: process.env.ALIVE_MSG || "╔═══════✮❁•°♛°•❁✮════════╗\n\n 𝐃𝐀𝐑𝐊 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐈𝐕𝐄 🩷...\n\n═══════✮❁•°♛°•❁✮═══════\n\n`ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴀᴄᴛɪᴠᴇ.`✅\n\n═══════✮❁•°♛°•❁✮═══════\n\n `ᴏᴡɴᴇʀ : ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`\n\n═══════✮❁•°♛°•❁✮═══════\n\n `ʙᴏᴛ : ᴅᴀʀᴋ_Qᴜᴇᴇɴ`\n\n═══════✮❁•°♛°•❁✮═══════\n\n ᴡʜᴀᴛꜱᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/IEEUnyvlnCqDeuFw1DEsWk\n\n═══════✮❁•°♛°•❁✮═══════\n\n 💬 ᴇɴᴏʏ ᴛʜᴇ ᴅᴀʀᴋ_Qᴜᴇᴇɴ ʙᴏᴛ 🩷 ....\n\n > ᴅᴀʀᴋ_Qᴜᴇᴇɴ \n\n ╚═══════✮❁•°♛°•❁✮════════╝", //add alive msg
};
