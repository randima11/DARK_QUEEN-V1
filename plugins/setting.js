/*
██████╗  █████╗ ██████╗ ██╗  ██╗     ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝    ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
██║  ██║███████║██████╔╝█████╔╝     ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║
██║  ██║██╔══██║██╔══██╗██╔═██╗     ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║
██████╔╝██║  ██║██║  ██║██║  ██╗    ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝
created by manisha sasmitha                                                                                 
 DONT COPY
*/













const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "settings",

    react: "⚙️",
    alias: ["setting","env"],
    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},
//========================================config setting==================================
async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`*╔═════ °❀•°✮SETTINGS°•❀°═════╗* 
*》* *✂ AUTO_READ_STATUS:* ➤ ${config.AUTO_READ_STATUS}
*》* *✂ MODE:* ➤ ${config.MODE} 
*》* *✂ ALIVE_IMG:* ➤ ${config.ALIVE_IMG} 
*》* *✂ ALIVE_MSG:* ➤ ${config.ALIVE_MSG} 
*》* *✂ ANTI_BAD:* ➤ ${config.ANTI_BAD} 
*》* *✂ PREFIX:* ➤ [${config.PREFIX}]
*》* *✂ OWNER_REACT:* ➤ ${config.OWNER_REACT} 
*》* *✂ BOT_NAME:* ➤ ${config.BOT_NAME}

> ᴅᴀʀᴋ_Qᴜᴇᴇɴ
╚══════✮❁•°❀°•❁✮══════╝

*⭕DARK_QUEEN NEW UPDATE*

*🖇️https://whatsapp.com/channel/0029VavZd1y0lwgxqEopap2e*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
