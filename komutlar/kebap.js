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
    .setAuthor(message.author.username + `,  Benden Sana Bi Acılı Adana Kebap!`)
    .setColor(3447003)
    .setDescription('')
  .setImage(`http://www.sirdaskebap.com/wp-content/uploads/2017/11/adana-kebap.png`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kebap'],
  permLevel: 0
};

exports.help = {
  name: 'kebap',
  description: 'Kebapmı İstiyorsun?',
  usage: 'kebap'
};
