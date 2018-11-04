const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Yenilikler**", `!starwars Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!şanslısayım Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!report Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!havadurumu Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!lenny Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!kahkaha Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!yazı-tura Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!atatürk Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!ramazanpidesi Komutu Eklendi Bakmak İçin *!yardım* Yazınız. \n!kebap Komutu Eklendi Bakmak İçin *!yardım* Yazınız.\n\nSunuculara Özel Küfür Ve Reklam Koruması Eklendi!`)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'new', 'news', 'yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'yenilikler'
};
