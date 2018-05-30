const Discord = require("discord.js")
exports.run = (client, msg, args) => {

let reason = args.slice(1).join(" ");

const warn = new Discord.RichEmbed()

.setTitle("User Warned")
/*
 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
 */
.setColor("#f44842")
.addField("User:", msg.mentions.members.first())
.addField("Moderator:", msg.author)
.addField('Reason', reason)
.setFooter("EssentialBot | Warning", "https://cdn.discordapp.com/app-icons/450402802129436695/ee00b42362502a4e65ce9e57010512f0.png")
.setThumbnail("https://cdn.discordapp.com/avatars/451142745923387392/2890ae54ea6e7e14db27dfa37e6b8221.png")
/*
 * Takes a Date object, defaults to current date.
 */
.setTimestamp();

msg.channel.send(warn);
console.log(warn);

msg.guild.channels.find("name", "logs").send({embed: warn})
};
