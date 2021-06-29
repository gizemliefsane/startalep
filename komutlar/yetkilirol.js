const Discord = require('discord.js');
const db = require('quick.db');
// bu kod noobingin altyapısıdır.
exports.run = async (client, message, args) => {
let b = db.fetch("açıktalep_" + message.guild.id)
if(!b) return message.channel.send("bu sunucuda talep sistemi açık değil \neğer sunucu kurucusuysan açmak için = s-talep-sistemi aç")
if(b == "kapalı") return message.channel.send("bu sunucuda talep sistemi açık değil")

if(message.author.id !== message.guild.owner.id) return message.channel.send("sadece sunucu kurucusu bunu düzenleyebilir")
let a = message.mentions.roles.first()
if(!a) return message.channel.send("bir rol girmelisin")
db.set("yetkilirol_" + message.guild.id, a.id)
message.channel.send("talep yetkilisi rolü <@&" + a.id + "> olarak ayarlandı")
// bu kod noobingin altyapısıdır.
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
// bu kod noobingin altyapısıdır.
exports.help = {
  name: 'talep-yetkili'
};