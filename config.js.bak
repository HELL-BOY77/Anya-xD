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
global.namaowner = ['HELL-BOY :(']
global.owner = ['917561823024']
global.premium = ['917561823024']
global.packname = 'Anya-xD'
global.author = 'WhatsApp•Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Sucsess👍',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Make Bot Admin First!',
    owner: 'Special Owner Bot',
    group: 'It's Special Bre Group...!',
    private: 'Only Can Chat Private Bre...',
    bot: 'Bot Number Only',
    wait: 'Please Wait...',
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
