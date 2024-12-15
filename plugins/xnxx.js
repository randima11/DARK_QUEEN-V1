const { cmd, commands } = require('../command');
const xnxx = require("xnxx-dl");
const { fetchJson, getBuffer } = require('../lib/functions');

// XNXX video download command
cmd({
    pattern: "xnxx",
    desc: "Downloads XNXX",
    use: ".xnxx",
    react: "🔞",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    const searchTerm = q.trim();
    if (!searchTerm) return reply(`ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ꜱᴇᴀʀᴄʜ ᴛᴇʀᴍ`);

    reply(`ꜱᴇᴀʀᴄʜɪɢ ꜰᴏʀ ʏᴏᴜʀ ᴠɪᴅᴇᴏ`);
    try {
        // Search for the video and download
        const videoInfo = await xnxx.download(searchTerm);
        if (!videoInfo || !videoInfo.link_dl) {
            return await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        }

        reply(`ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ`);
        const videoUrl = videoInfo.link_dl;
        await conn.sendMessage(
            from,
            { video: { url: videoUrl }, caption: '> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*', mimetype: 'video/mp4' }, 
            { quoted: mek }
        )

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply(`Error: ${e.message}`);
    }
});
