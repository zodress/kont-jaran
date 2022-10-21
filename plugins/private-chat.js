async function handler(m, { conn, text, usedPrefix, command, args }) {
	// Batas
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	let q = m.quoted ? m.quoted : m
	let tujuan = `Hai @${mention.replace(/@.+/, '')}👋,
👋 Saya *${conn.user.name}* / Bot Whatsapp, Ada Seseorang Yang Ingin Mengajakmu Melakukan Private Chat, Mungkin Seseorang Itu Adalah Teman dekatmu / Orang Yang Mencintaim

Tekan Tombol Dibawah Ini Untuk *Menerima* Atau *Menolak*
`
	let cap = `${htki} PRIVATE CHAT ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${nomorown}
Contoh: ${usedPrefix + command} ${nomorown}`
let suks = `Permintaan Private Chat Dikirim Ke @${mention.replace(/@.+/, '')}
Silahkan Menungggu Persetujuan Dari Nomor Tujuan/Target Bila Sudah Menekan Tombol *Terima*

Info Detail Private Chat
👥 Dari / You : @${m.sender.replace(/@.+/, '')}
👥 Nomor Tujuan / Target : @${mention.replace(/@.+/, '')}
`
    // Batas
    command = command.toLowerCase()
    this.menfes = this.menfes ? this.menfes : {}
    switch (command) {
        case 'stopprivate': {
            let room = Object.values(this.menfes).find(room => room.check(m.sender))
            if (!room) return this.sendButton(m.chat, '*Kamu tidak sedang berada di Private Chat*', author, null, [['Mulai Private Chat', '.privatechat']], null)
            m.reply('Sukses Stop Private Chat')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, room.b + ' *Meninggalkan Private Chat*', author, null, [['Mulai Private Chat', '.privatechat']], null)
            delete this.menfes[room.id]
            if (command === 'stopprivate') break
        }
        case 'privatechat': {
            if (Object.values(this.menfes).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*Kamu masih berada di dalam Private Chat, menunggu Balasan*', author, null, [['Stop Private Chat', '.stopprivate']], null)
            let room = Object.values(this.menfes).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.a, '*Private Chat Sudah Tersambung!*\nDengan: ' + m.sender, author, null, [['Stop Private Chat', '.stopprivate']], null)
                await this.sendButton(m.sender, '*Private Chat Sudah Tersambung!*\nDengan: Pengirim Rahasia', author, null, [['Stop Private Chat', '.stopprivate']], null)
            } else {
            // Batas
	if (!m.quoted) {
		await conn.sendButton(mention, tujuan, cap, null, [['Terima', '.privatechat'], ['Tolak', '.stopprivate']], null)
	} else {
		await conn.sendButton(mention, tujuan, cap, null, [['Terima', '.privatechat'], ['Tolak', '.stopprivate']], null)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	await conn.sendButton(m.chat, suks, wm, null, [['Tes Bot', 'tes']], m, { mentions: conn.parseMention(suks) })
            // Batas
                let id = + new Date
                this.menfes[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '*Menunggu Terima Private Chat...*', author, null, [['Stop Private Chat', '.stopprivate']], null)
            }
            break
        }
    }
}
handler.help = ['privatechat <628XXXXXXXXXX>', 'stopprivate']
handler.tags = ['menbalas']
handler.command = ['privatechat', 'stopprivate']

handler.private = true

export default handler
