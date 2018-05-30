exports.run = (client, msg, args) => {

  try {
    var muted = msg.guild.roles.find("name", "Muted");
    var mention = msg.mentions.members.first()

    if (mention.kickable) {
        mention.removeRole(muted).catch(console.error);
        msg.reply("you unmuted " + msg.mentions.members.first() + " :hammer:");
    } else {
        msg.reply("I cannot unmute that person.");
    }

  } catch (e) {

    console.log(e)
    msg.channel.send(":x: Oh Man, command failed :(")

  }};
