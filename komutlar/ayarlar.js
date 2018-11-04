const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
  
    let channel
    let dmText
    let joinText
    let leaveText

 
    db.fetchObject(`messageChannel_${message.guild.id}`).then(channelIDFetched => {


        if (!message.guild.channels.get(channelIDFetched.text)) channel = '*Ayarlanmadı*'
        else channel = message.guild.channels.get(channelIDFetched.text)



        db.fetchObject(`joinMessageDM_${message.guild.id}`).then(joinDMFetched => {

            if (!joinDMFetched.text) dmText = '*Ayarlanmadı*'
            else dmText = joinDMFetched.text


            db.fetchObject(`joinMessage_${message.guild.id}`).then(joinTextFetched => {

                if (!joinTextFetched.text) joinText = '*Ayarlanmadı*'
                else joinText = joinTextFetched.text

                db.fetchObject(`leaveMessage_${message.guild.id}`).then(leaveTextFetched => {

                    if (!leaveTextFetched.text) leaveText = '*Ayarlanmadı*'
                    else leaveText = leaveTextFetched.text


                    let response = `**Kayıt Kanalı **\n > ${channel}\n\n`
                    response += `**Hoşgeldin (DM) Mesajı**\n > ${dmText}\n\n`
                    response += `**Hoşgeldin Mesajı**\n > ${joinText}\n\n`
                    response += `**Çıkış Mesajı**\n > ${leaveText}\n\n`

                    func.embed(message.channel, response) 

                })


            })

        })

    })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayarlar'],
  permLevel: 0
};

exports.help = {
  name: 'ayarlar',
  description: 'Sunucunuz İçin Ayarları Yaparsınız.',
  usage: 'ayarlar'
};
