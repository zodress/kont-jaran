import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 100,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/rtf"]
     let lin_ = ["https://www.youtube.com","https://www.instagram.com","https://www.facebook.com"]
     let cap = `*${cmenut} Information ${htka}*
${cmenub} *🏷️ Nama:* ${name}
${cmenub} *❤️ Pasangan:*  ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya And Jomblo`}
${cmenub} *💲 Money:* *RP* ${money}
${cmenub} *🏆 Level* ${level}
${cmenub} *🎋 Role:* ${role}
${cmenub} *🧬 XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
${cmenub} *📨 Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}
${cmenuf}

Ketik *${usedPrefix}inv* untuk melihat Inventory RPG Lu Ngab

${cmenua}`

let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`
    let pusat = ["ke1", "ke2", "ke3", "ke4", "ke5", "ke6"]
let pilih = pusat.getRandom()
if (pilih == "ke1") {
	await conn.send2ButtonDoc(m.chat, '┅────┅─❏ *MENU 1* ❏─┅────┅\n\n' + cap, weem, em.getRandom() + ' All Menu', '.? all', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke2") {
	await conn.send2ButtonLoc(m.chat, imgr + 'Menu 2', '┅────┅─❏ *MENU 2* ❏─┅────┅\n\n' + cap, weem, em.getRandom() + ' All Menu', '.? all', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke3") {
	await conn.send2ButtonImg(m.chat, imgr + 'Menu 3', '┅────┅─❏ *MENU 3* ❏─┅────┅\n\n' + cap, weem, em.getRandom() + ' All Menu', '.? all', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke4") {
	await conn.send2ButtonVid(m.chat, imgr + 'Menu 4', '┅────┅─❏ *MENU 4* ❏─┅────┅\n\n' + cap, weem, em.getRandom() + ' All Menu', '.? all', em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
if (pilih == "ke5") {
	let buttons = [{ buttonText: { displayText: em.getRandom() + 'Donasi' }, buttonId: '.donasi' }, { buttonText: { displayText: em.getRandom() + 'All Menu' }, buttonId: '.? all' }, { buttonText: { displayText: em.getRandom() + 'List menu' }, buttonId: '.menulist' }]
    let msg = await conn.sendMessage(m.chat, { image: { url: `${imgr + 'Menu 5'}`}, caption: '┅────┅─❏ *MENU 5* ❏─┅────┅\n\n' + cap, footer: botdate, buttons }, { quoted: fakes })
    conn.sendMessage(m.chat, { quoted: msg })
}
if (pilih == "ke6") {
	await conn.sendTemplateButtonLoc(m.chat, imgr + 'Menu 6', '┅────┅─❏ *MENU 6* ❏─┅────┅\n\n' + cap, weem, em.getRandom() + ' List Menu', usedPrefix + 'menulist', fakes, fakefb)
}
        
}

handler.help = ['menu', 'help', '?2']
handler.tags = ['main']
handler.command = /^(menu|help|\?2)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
