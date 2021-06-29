const Discord = require('discord.js');
const db = require("quick.db")
module.exports = client => {
 setInterval(function() {
}, 8000);
var aktivite = [    
"Noobing Talep Altyapısı"
];

 setInterval(() => {
 var rastgeleOyun = Math.floor(Math.random() * aktivite.length);
const oyun = `${aktivite[rastgeleOyun]}`
  client.user.setActivity(oyun,  {type: 'PLAYING' }) 
console.log("ready.js çalıştı.")
}, 10000);
   console.log(`${client.user.username} başarıyla giriş yaptı.`);
}

// { type: 'STREAMING' ,  url: 'https://twitch.tv/.' } yayın yapıyor
 //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR