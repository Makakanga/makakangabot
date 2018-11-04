const Discord = require('discord.js');

exports.run = (client, message, params) => {
  var random = Math.floor(Math.random() * (1)); 
  if (Math.floor((Math.random() * 15) + 1) === 1) {
    message.channel.send('-Dün beni dayım aradı \n-Hangi dayın? \n-Depresyondayım.');

}else if (Math.floor((Math.random() * 15) + 1) === 2) {
  message.channel.send('Çok tatlısın ama bende şeker hastasıyım.');

if (Math.floor((Math.random() * 15) + 1) === 1) {
message.channel.send('Adama sormuşlar: \n-Karınızla ortak bir özelliğinizi söyleyin \nAdam: \n-Aynı günde evlendik.');
}else if (Math.floor((Math.random() * 15) + 1) === 2) {
  message.channel.send('Geçen gün taksi çevirdim hala dönüyo... :joy: ');

if (Math.floor((Math.random() * 15) + 1) === 1) {
  message.channel.send('Aya ilk bayrağı kim dikmiştir \nCevap: Terzi.');
}else if (Math.floor((Math.random() * 15) + 1) === 2) {
  message.channel.send('Adamın biri kızmış istemeye gelmişler.');

if (Math.floor((Math.random() * 15) + 1) === 1) {
  message.channel.send('Ayda 5 milyon kazanma ister misin? \n– Evet - O zaman Ay’a git.');
}else if (Math.floor((Math.random() * 15) + 1) === 2) {
  message.channel.send('Adamın kafası atmış bacakları eşek.');

  if (Math.floor((Math.random() * 15) + 1) === 1) {
    message.channel.send('Geçen gün geçmiş günlerimi aradım ama meşguldü.');
  }else if (Math.floor((Math.random() * 15) + 1) === 2) {
    message.channel.send('Adamın birisi televizyona çıkmış bir daha indirememişler.');

    if (Math.floor((Math.random() * 15) + 1) === 1) {
      message.channel.send('Adamın biri gülmüş, saksıya koymuşlar.');
    }else if (Math.floor((Math.random() * 15) + 1) === 2) {
      message.channel.send('Uzun lafın kısası : U.L.')

      if (Math.floor((Math.random() * 15) + 1) === 1) {
        message.channel.send('Yağmur yağmış, kar peynir!');
      }else if (Math.floor((Math.random() * 15) + 1) === 2) {
        message.channel.send('Sakla samanı, inekler aç kalsın.');

        if (Math.floor((Math.random() * 15) + 1) === 1) {
          message.channel.send('Dünya dönermiş ay da köfte…');
        }else if (Math.floor((Math.random() * 15) + 1) === 2) {
          message.channel.send('Son gülen en geç anlayandır.');

          if (Math.floor((Math.random() * 15) + 1) === 1) {
            message.channel.send('Sen kamyonu al, leonardo da vinci');
          }else if (Math.floor((Math.random() * 15) + 1) === 2) {
            message.channel.send('Bazıları yemeğimi ocakta unuttum der ya bende şubatta unuttum.');

            if (Math.floor((Math.random() * 15) + 1) === 1) {
              message.channel.send('Japonlar nasil su ister cevap: makarama su ko.');
            }else if (Math.floor((Math.random() * 15) + 1) === 2) {
              message.channel.send('Geçen ödeme noktasına gittim ö dedim geldim.');

              if (Math.floor((Math.random() * 15) + 1) === 1) {
                message.channel.send('Sınav kolaydı ama fanta çıktı.');
              }else if (Math.floor((Math.random() * 15) + 1) === 2) {
                message.channel.send('İlla soğuk espri mi yapcaz ısıtıp yapsak olmaz mı.');

                if (Math.floor((Math.random() * 15) + 1) === 1) {
                  message.channel.send('Adamın biri şoka girmiş karısıda bime.');
                }else if (Math.floor((Math.random() * 15) + 1) === 2) {
                  message.channel.send('Rusya soğuk savaşı neden kaybetti? \nÇünkü o zaman Rusyada yazdı.');
}}}}}}}}}}}}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'espri yapar',
  usage: 'espri'
};
