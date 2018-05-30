exports.run = (client, msg, args) => {

  try {

    const mention = msg.mentions.members.first()

    if (mention.kickable) {
        mention.send("You have been kicked from " + msg.guild.name);
        msg.reply("you kicked " + msg.mentions.members.first() + " :hammer:")
        mention.kick(msg.author + " has kicked " + msg.mentions.members.first());
    } else {
        msg.reply("I cannot kick that person.");
    }

  } catch (e) {

    console.log(e)
    msg.channel.send(":x: Dang it.")

  }};
