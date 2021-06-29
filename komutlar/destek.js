const Discord = require('discord.js');
const db = require('quick.db');
// bu kod noobingin altyapısıdır.
exports.run = async (client, message, args) => {
	message.delete({ timeout: 5000 })
let a = db.fetch("açıktalep_" + message.guild.id)
if(!a) return message.channel.send("bu sunucuda talep sistemi açık değil \neğer sunucu kurucusuysan açmak için = s-talep-sistemi aç")
if(a == "kapalı") return message.channel.send("bu sunucuda talep sistemi açık değil  \neğer sunucu kurucusuysan açmak için = s-talep-sistemi aç")
   if (message.guild.channels.cache.get(db.fetch(`destek_${message.author.id}_${message.guild.id}`))) return false || message.channel.send('Şu anda mevcut bir talebin var.').then(message => { message.delete({ timeout: 5000 })})
      
    let kullanici = message.author
let yetkilirol = db.fetch("yetkilirol_" + message.guild.id)
let yetkili = message.guild.roles.cache.find(x => x.id == yetkilirol)
    let herkes = message.guild.roles.cache.find(x => x.name == "@everyone")
    message.guild.channels.create(`destek-${message.author.username}`, "text").then(async c => {
        db.set(`destek_${message.author.id}_${message.guild.id}`, c.id)
let kategoriid = db.fetch("kategoriid_" + message.guild.id)
if(kategoriid){ 
       const category = message.guild.channels.cache.get(kategoriid)
        c.setParent(category.id)}
        c.send(`${kullanici} destek talebin oluşturuldu. Destek ekibi seninle buradan ilgilenecek.\nTalebi kapatmak icin s-destek-kapat`)
        c.overwritePermissions([
            {
                id: kullanici.id,
                allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            },
            {
                id: yetkili.id,
                allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            },
            {
                id: herkes.id,
                deny: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','SEND_MESSAGES'],
            },
        ]);
})
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
  name: 'talep'
};