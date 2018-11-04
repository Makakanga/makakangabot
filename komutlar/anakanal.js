const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
    
        // Return Statements
        if (!message.member.roles.find('name', 'Yetkili')) return func.embed(message.channel, '**Yetkili İsminde Rol Bulamıyorum!**', 120000) // This returns if it CANT find the owner role on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
        if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return func.embed(message.channel, '**Kullanım**\n > *!anakanal #kanal*') // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
    
        // Fetch the new channel they mentioned
        let newChannel;
        if (args.join(" ").toUpperCase() === 'NONE') newChannel = ''; // If they wrote the word none, it sets newChannel as empty.
        else newChannel = message.mentions.channels.first().id; // If they actually mentioned a channel, it will set newChannel as that.
    
        // Update Channel
        db.updateText(`messageChannel_${message.guild.id}`, newChannel).then(i => {
            func.embed(message.channel, `**Kayıt kanalı başarıyla güncellendi**` `${message.mentions.channels.first()}`) // Finally, send in chat that they updated the channel.
        })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anakanal'],
  permLevel: 0
};

exports.help = {
  name: 'anakanal',
  description: 'Ana Kanalı Ayarlarsınız.',
  usage: 'anakanal'
};
