const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://api.lolhuman.xyz': 'azzbot',
}

// Other
global.namabot = ['Anya-xD']
global.namaowner = ['ʜᴇʟʟ ʙᴏꪗ']
global.owner = ['917561823024']
global.premium = ['917561823024']
global.packname = 'ꫝꫀꪶꪶ ᥇ꪮꪗ'
global.author = '𝘼𝙣𝙮𝙖-𝙭𝘿'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*_ᴅᴏɴᴇ_*',
    admin: 'Group Admin Special Features!',
    botAdmin: 'ʙᴏᴛ ɪꜱ ɴᴏᴛ ᴀᴅᴍɪɴ!',
    owner: 'ᴏᴡɴᴇʀ ᴏɴʟꪗ',
    group: 'ꪮꪀꪶꪗ ᠻꪮ𝘳 ᧁ𝘳ꪮꪊρ',
    private: 'ᴏɴʟꪗ ᴩʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    bot: 'ʙᴏᴛ ɴᴜᴍʙᴇʀ ᴏɴʟꪗ',
    wait: '「▰▰▰▱▱▱▱▱▱▱」Loading...',
    endLimit: 'The daily limit is over, the limit will be reset tomorrow',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
