
const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {

  if (args == 0) return msg.channel.send("Please provide a poll topic.")

  let embed = new Discord.RichEmbed()

  .setTitle(`Poll by ${msg.author.username}`)

  .setColor("#3facbb")

  .setDescription(`${args}`.split(',').join(' '));



  return msg.channel.send(embed).then(msg.delete())


  .then(function (msg) {
              msg.react("✅")
              msg.react("⛔")

     }).catch(function() {

  });

};



module.exports.help = {

  name: 'poll'

};
