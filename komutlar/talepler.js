const Discord = require('discord.js');
const db = require('quick.db');
// bu kod noobingin altyapısıdır.
exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.id) return message.channel.send("sadece sunucu kurucusu bunu düzenleyebilir")
let a = args[0]
if(!a) return message.channel.send("açayım mı kapatayım mı onu girmelisin")
if(a == "aç"){
db.set("açıktalep_" + message.guild.id, "açık")
message.channel.send("talep sistemi açık olarak ayarlandı")
}
if(a == "kapat"){
db.set("açıktalep_" + message.guild.id, "kapalı")
message.channel.send("talep sistemi kapalı olarak ayarlandı")
}
if(a !== "kapat"|| a !== "aç"){
message.channel.send("kapat/aç ikisinden birini girmelisin!")
}
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
  name: 'talep-sistemi'
};