
exports.run = (client, message, args) => {
  message.channel.send(`( ͡° ͜ʖ ͡°)`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['havadurumu'],
  permLevel: 0
};

exports.help = {
  name: 'lenny',
  description: 'Lennyi Tanıyormusun?',
  usage: 'lenny'
};
