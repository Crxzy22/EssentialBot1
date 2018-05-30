exports.run = (client, msg, args) => {

  try {
    var muted = msg.guild.roles.find("name", "Muted");
    var mention = msg.mentions.members.first()

    if (mention.kickable) {
        mention.addRole(muted).catch(console.error);
        msg.reply("you muted " + msg.mentions.members.first() + " :hammer:");
    } else {
        msg.reply("I cannot mute that person.");
    }

  } catch (e) {

    console.log(e)
    msg.channel.send(":x: WHYYYYYY?!")

  }};
