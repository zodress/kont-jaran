let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sn = '10'
let ss = '20'
let sp = '35'
//premium
let pn = '10'
let pp = '20'
let pv = '50'
let info = ` PROMO!!
╭━━━━「 *SEWA* 」
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar:* _${ss}k/grup (2 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (4 bulan)_                                                      
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_
┊⫹⫺ *Pro:* _${pp}k (4 bulan)_
┊⫹⫺ *Vip:* _${pv}k (8 bulan)_                                               
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa Indosat:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Ovo:* [${povo}]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	 {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
