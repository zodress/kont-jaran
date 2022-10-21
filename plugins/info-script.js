import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `Subscribe My YouTube Channel :
*https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow*

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen Yang Model Script Bot Seperti Ini Bro?
Mampir Aja Ke YT Diatas *FREE*

Pengen yang udah di recode oleh developer *Script Private*?
Script bot ini dijual bila kalian mau bisa chat developer

wa.me/6282127487538`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/_ctzhid",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'WH-MODS-DEV-V1 MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
