Discord = require(`discord.js`)
exports.run = (client, msg, args) => {
  let amount = parseInt(args[0])

if(!amount) return msg.reply(`No number specified.`);
if(amount >= 100 || amount <= 1) return msg.reply("You can only delete 2-99 messages!")

if(!msg.member.hasPermission(`MANAGE_MESSAGES`) || msg.guild.members.get(420036907406327808)) return msg.reply("You can't do that!")
msg.channel.bulkDelete(amount + 1).then(() => {
  send = new Discord.RichEmbed()
send(`Successfully purged!`).then(m => m.delete(2750))

  msg.channel.send({embed: send})
})
}
