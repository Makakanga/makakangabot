var weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args, degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    //console.log(JSON.stringify(result, null, 2));
    if (!result) return message.channel.send(` ❌ Bu şehir mevcut değil. ❌ `)
    if (!result[0]) return message.channel.send(` ❌ Bu şehir mevcut değil. ❌ `)
    message.channel.send({
      embed: {
        thumbnail: {
  				url: result[0].current.imageUrl
  			},
        title: ` Hava Durumu `,
        description: `Yer : ${result[0].location.name}\nSıcaklık : ${result[0].current.temperature}°C\nNem : ${result[0].current.humidity}%\nRüzgar hızı : ${result[0].current.windspeed}`,
        color: 0xFFFFFF
      }
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['havadurumu'],
  permLevel: 0
};

exports.help = {
  name: 'havadurumu',
  description: 'Hava Durumu',
  usage: 'havadurumu'
};
