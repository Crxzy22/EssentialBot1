exports.run = (client, msg, args, points, fs) => {

  try {

    const mention = msg.mentions.members.first().user.id
    const m = args.shift()
    const aop = args.shift()

    if (points[mention]) {
        points[mention] = parseInt(points[mention]) + parseInt(aop)
        let newufile = fs.writeFile('../PointBot/points.json', JSON.stringify(points));
        msg.reply("You gave " + aop + " to " + msg.mentions.members.first());
    } else {
        points[mention] = aop
        let newufile = fs.writeFile('../PointBot/points.json', JSON.stringify(points));
        msg.reply("You gave " + aop + " points to " + msg.mentions.members.first());
    }

  } catch (e) {

    console.log(e)
    msg.channel.send(":x:")

  }};
