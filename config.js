/*
    Base By ArxzyDev
    Recode By QyuuNee
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6281212035575
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Koneko-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '22253ba266448d1097bef962' // AMBIL DI LOLHUMAN
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'ᴋᴏɴᴇᴋᴏ-ᴍᴅ'
global.namaowner = 'OwnerKoneko'
global.wagc = "https://chat.whatsapp.com/GFtm25cVEmC1ZtqoCenClf"

//—————「 Setting Owner 」—————//
global.owner = ['6281212035575']
global.nomerowner = '6281212035575'
global.premium = ['6281212035575']

//—————「 Set Wm 」—————//
global.packname = 'ᴋᴏɴᴇᴋᴏ-ᴍᴅ'
global.author = 'Bot: +62 895-1333-88950\nInstagram: ravaja_'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~\n\nJangan lupa Follow IG : instagram.com/ravaja_\nMau di Folbek? DM AJA',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 3k Permanen* 😋\n\n🍂 *Subscribe Channel Owner Pakai 10 Akun Gratis Premium Bot (Sertakan Bukti)* ❗',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 3k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/bcb6c6bfa6dcb7c87bd78.jpg'
global.link = 'https://instagram.com/ravaja_'
global.thumb = fs.readFileSync('./media/koneko.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
