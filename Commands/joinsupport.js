Discord = require("discord.js")
exports.run = (client, msg, args) => {
   const support = new Discord.RichEmbed()
    .setColor("#15f153")
    .setTitle('Support server')
    .setTimestamp()
    .addField(`Join Below`, `https://discord.gg/gvNGDNJ`)
    .setFooter("A bot in beta ")

    msg.channel.send({embed: support})
}
