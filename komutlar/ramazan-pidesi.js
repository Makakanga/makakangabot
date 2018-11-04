const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + `  Canı Ramazan Pidesi Çekmiş Olmalı!`)
    .setColor(3447003)
    .setDescription('')
  .setImage(`http://www.halkinhabercisi.com/wp-content/uploads/2014/06/ramazan_pidesi_ramazan_pidesi..jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ramazanpidesi'],
  permLevel: 0
};

exports.help = {
  name: 'ramazanpidesi',
  description: 'Canınız Ramazan Pidesimi Çekti?',
  usage: 'ramazanpidesi'
};
