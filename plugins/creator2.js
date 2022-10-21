import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'vamses3') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner Itsuki;Bot;;Md\nFN:Saya Owner Itsuki WhatsApp, Md\nNICKNAME:👑 Owner Itsuki Bot\nORG:WH\nTITLE:MODS\nitem1.TEL;waid=6285942994641:+62 859-4299-4641\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://instagram.com/maouk.store\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:gojosatorourikaa@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Chonix\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'vamses2') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6285172402754:+62 851-7240-2754\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
if (command == 'vamses3') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 🥺`, `gojosatorourikaat@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://instagram.com/maouk.store`, `👤 Gada pawang nih senggol dong 😔`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🔥 Bot WhatsApp 🐣`, `📵 Don't spam/call me 😢`, `gojosatorourikaat@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://instagram.com/maouk.store/`, `🤖 Hanya bot biasa yang kadang suka eror ☺`]
  ], fakes)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya ka😉`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})
  }
  }
 //knp di enc? , biar kgk di rename deksripsi Developer nya, kalau untuk nomor nya bakal otomatis berubah pas kalian ubah di config.js
}
handler.help = ['vamses1', 'vamses2', 'vamses3']
handler.tags = ['info']

handler.command = /^(vamses1|vamses2|vamses3)$/i

export default handler
