
exports.run = (client, message, args) => {
	let coin = Math.round(Math.random() * 1);
	let flip = ["Yazı", "Tura"];
	message.channel.send({
		embed: {
			description: flip[coin],
			header: { text: "Yazı Tura" },
			color: 0xFFFFFF,
		}
	})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-tura'],
  permLevel: 2
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Atar',
  usage: 'yazı-tura'
};