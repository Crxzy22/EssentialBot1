const Discord = require("discord.js")
exports.run = (client, msg, args) => {

  try {

    const mention = msg.mentions.members.first();

    if (mention.bannable) {
     mention.ban();
    
    const ban = new Discord.RichEmbed()
    .setColor("#15f153")
    .setTitle('Ban!')
    .setDescription(msg.mentions.members.first() + " has been banned by " + msg.author + " :hammer:" )
    .setFooter("Report of this ban has been sent to the logs channel | Message an HR to appeal");
    
    msg.mentions.members.first().send({embed: ban});
    msg.channel.send({embed: ban});
    msg.guild.channels.find("name", "logs").send({embed: ban})

        } else {
        msg.reply("I cannot ban that person.");
        return msg.guild.channels.find("Can't find logs channel.");
    }


  } catch (e) {

    console.log(e);
    msg.channel.send(":x:");

  }};
