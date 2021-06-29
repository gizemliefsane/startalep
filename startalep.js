const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const db = require('quick.db');
const app = express();
// bu kod noobingin altyapısıdır.
const fs = require("fs");
app.get("/", (req, res) => {
  res.send("Noobing tarafından yapılan ayarlamalı talep sistemi");
});
app.listen(process.env.PORT);
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Yüklenen komut: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Ayarlanan etkinlik: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`Noobing tarafından yapılan ayarlamalı talep sistemi \nBilgiler \n${client.user.username} adı ile giriş yapıldı. \n${client.ws.ping} pingiyle giriş yapıldı.`);
});

client.login(process.env.botunuzuntokeni);

client.on("message", message => {
  if (message.content.toLowerCase() === "s-destek-kapat") {
  if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Bu komutu sadece kendi talep kanalında kullanabilirsin`)
  message.channel.delete()
   db.delete(`destek_${message.author.id}_${message.guild.id}`)
        }
      })
