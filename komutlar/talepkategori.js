const Discord = require('discord.js');
const db = require('quick.db');
// bu kod noobingin altyapısıdır.
exports.run = async (client, message, args) => {
let b = db.fetch("açıktalep_" + message.guild.id)
if(!b) return message.channel.send("bu sunucuda talep sistemi açık değil \neğer sunucu kurucusuysan açmak için = s-talep-sistemi aç")
if(b == "kapalı") return message.channel.send("bu sunucuda talep sistemi açık değil")

if(message.author.id !== message.guild.owner.id) return message.channel.send("sadece sunucu kurucusu bunu düzenleyebilir")
let a = args[0]
let c = 0
if(!a) return message.channel.send("kategori id si girmelisin")
if(isNaN(a)) return message.channel.send("kategori id si girmelisin başka bişey değil")
if(a.length !== 8) return message.channel.send("sayı gir demedim kategori id'si gir dedim")
message.guild.channels.cache.forEach(b => {
if(b.type == "category"){
if(b.id == a) c = "doğru" 
}
})
if(c == 0) return message.channel.send("bu sunucudaki bir kategori id'sini girmen lazım")
db.set("kategoriid_" + message.guild.id, a)
message.channel.send("taleplerin açılacağı kategori ayarlandı.")
};
// bu kod noobingin altyapısıdır.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
// bu kod noobingin altyapısıdır.
exports.help = {
  name: 'talep-kategori'
};