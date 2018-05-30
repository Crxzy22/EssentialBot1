exports.run = (client, msg, args, points) => {

  try {
    if (points[msg.author.id]) {
        msg.reply("You have " + points[msg.author.id] + " points!")
    } else {
        msg.reply("You have 0 points.")
    }

  } catch (e) {

    console.log(e)
    msg.channel.send(":x:")

  }};
