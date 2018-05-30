Discord = require("discord.js")
exports.run = (bot, msg, args) => {
 console.log(bot);
   const botinfo = new Discord.RichEmbed()
    .setColor("#5795f9")
    .setAuthor("EssentialBot", "https://cdn.discordapp.com/app-icons/450402802129436695/ee00b42362502a4e65ce9e57010512f0.png")
    .setTitle("EssentialBot [BETA]")
    .addField("User's Serving", "" + bot.users.size)
    .addField("Channels", "" + bot.channels.size)
    .addField("Servers", "" + bot.guilds.size)
    .addField("Commands", "Do -help")
    .addField("Scripting Language", "JavaScript")
    .addField("Current Version", "2.0")
    .addField("Sponsor", "Essential Technologies")
    .setFooter("EssentialBot | https://discord.gg/gvNGDNJ")
    .setThumbnail(bot.user.avatarURL)
    msg.channel.send({embed: botinfo})
    .then(async function (msg) {
                  await msg.react("🇮")
                        msg.react("🇳")
                        msg.react("🇫")
                        msg.react("🇴")
})}
