const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "", //enter your session
    CAPTION: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "DARK_QUEEN-ᴠ1",
    STATUS_REPLY: process.env.STATUS_REPLY || "`☺️`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/v1k9r3.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "╔═══════✮❁•°♛°•❁✮════════╗\n\n 𝐃𝐀𝐑𝐊 𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐈𝐕𝐄 🩷...\n\n═══════✮❁•°♛°•❁✮═══════\n\n`ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴀᴄᴛɪᴠᴇ.`✅\n\n═══════✮❁•°♛°•❁✮═══════\n\n `ᴏᴡɴᴇʀ : ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`\n\n═══════✮❁•°♛°•❁✮═══════\n\n `ʙᴏᴛ : ᴅᴀʀᴋ_Qᴜᴇᴇɴ`\n\n═══════✮❁•°♛°•❁✮═══════\n\n ᴡʜᴀᴛꜱᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/IEEUnyvlnCqDeuFw1DEsWk\n\n═══════✮❁•°♛°•❁✮═══════\n\n 💬 ᴇɴᴏʏ ᴛʜᴇ ᴅᴀʀᴋ_Qᴜᴇᴇɴ ʙᴏᴛ 🩷 ....\n\n > ᴅᴀʀᴋ_Qᴜᴇᴇɴ \n\n ╚═══════✮❁•°♛°•❁✮════════╝",
    AUTO_BIO:"true",
};
