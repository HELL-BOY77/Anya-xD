const fs = require('fs')
const chalk = require('chalk')

// Api Website
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Download Free Api Key So If You Want To Change Please
global.APIKeys = {
	'https://api.lolhuman.xyz': '4e2e2a1fdaac541c554a22c0', // Free Api Key🕊️
}

// Other
global.namabot = ['𝘼𝙣𝙮𝙖-𝙭𝘿']
global.namaowner = ['𝑯𝒆𝒍𝒍 𝑩𝒐𝒚 ʕ•ᴥ•ʔ']
global.owner = ['917561823024']
global.premium = ['917561823024']
global.packname = '🔮'
global.author = '𝘼𝙣𝙮𝙖-𝙭𝘿'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ^_^',
    admin: 'ɢᴏʀᴜᴩ ᴀᴅᴍɪɴ ᴏɴʟʏ ᴜꜱᴇ!',
    botAdmin: 'ʙᴏᴛ ɪꜱ ɴᴏᴛ ᴀᴅᴍɪɴ!',
    owner: 'ᴏᴡɴᴇʀ ᴏɴʟʏ',
    group: 'ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴩ',
    private: 'ᴏɴʟʏ ᴩʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    bot: 'ʙᴏᴛ ɴᴜᴍʙᴇʀ ᴏɴʟʏ',
    sticker: '*_ᴄʀᴇᴀᴛɪɴɢ ꜱᴛɪᴄᴋᴇʀ ᴩʟᴢᴢ ᴡᴀɪᴛ :)_*',
    wait: '*「▰▰▰▱▱▱」ʟᴏᴀᴅɪɴɢ...*',
    endLimit: 'ᴛʜᴇ ʟɪᴍɪᴛ ɪꜱ ᴏᴠᴇʀ ᴩʟᴇᴀꜱᴇ ᴡᴀɪᴛ 24 ʜᴏᴜʀ ᴛᴏ ʀᴇꜱᴇᴛ ʟɪᴍɪᴛ',
}
//If you give a limit, don't give it a little bit 
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/xavi.jpg') // Bot Menu Photo 
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' } // video menu url

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
// HELL BOY
