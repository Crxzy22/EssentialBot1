exports.run = (client, msg, args) => {

// Variables

var text = args.join(" ")

if(!msg.member.hasPermission(`ADMINISTRATOR`) || msg.guild.members.get(420036907406327808)) return msg.reply("You must have the `ADMINISTRATOR` permission to use this command")


msg.channel.send(text)

msg.delete(1)

}
