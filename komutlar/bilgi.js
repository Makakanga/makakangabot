const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel Mesajlarına Bilgi Mesajımı Attım! :postbox: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**❯ Yapımcı**", " @Dr.claw#7336 ", )
  .addField("**❯ Sürüm**", " v0.5.5 ", )
  .addField("**❯ Yapıldığı Tarih**", " 12 Mart 2018 ", )
  .addField("**❯ Bağlı Olduğum Sunucu**", client.guilds.size , )
  .addField("**❯ Bağlı Olduğum Sunuculardakı Kullanıcılar**", client.users.size , )
	.addField("**❯ Bot Davet**", " [Davet Et](https://is.gd/VS13af)", )
  .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/xW5kj) ", )
	.setThumbnail(`"https://forum.gamer.com.tr/attachments/bilgi-png.55209/"`);
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
