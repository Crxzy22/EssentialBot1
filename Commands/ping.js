exports.run = (client, msg, args) => {

  const ping = new Discord.RichEmbed()
  .setColor("#15f153")
  .setTitle('Ping?')
  .setDescription(msg.mentions.members.first() + "Pong! Latency is " + ${m.createdTimestamp - msg.createdTimestamp} + " ms. API Latency is " + ${Math.round(bot.ping)} "ms")
  .setFooter("EssentialBot");

  msg.channel.send(ping)

  .then(async function (msg) {
              await msg.react("🏓")
              await msg.react("🇵")
              await msg.react("🇮")
              await msg.react("🇳")
              await msg.react("🇬")  })
 }
