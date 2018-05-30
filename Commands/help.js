let Discord = require("discord.js")
exports.run = (client, msg, args) => {

const help = new Discord.RichEmbed()
  .setTitle("EssentialBot Information")
  .setAuthor("EssentialBot", "https://cdn.discordapp.com/app-icons/450402802129436695/ee00b42362502a4e65ce9e57010512f0.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("#15f153")
  .setDescription("Take a look below for more information.")
  .setFooter("EssentialBot", "https://cdn.discordapp.com/app-icons/450402802129436695/ee00b42362502a4e65ce9e57010512f0.png")
  .setThumbnail("https://cdn.discordapp.com/app-icons/450402802129436695/ee00b42362502a4e65ce9e57010512f0.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.gg/gvNGDNJ")
  .addField("User Commands","**help** - Lists commands and support options \n **botinfo** - Check out some cool bot stats \n **points** - View your points balance")


  .addField("Moderator Commands", "**kick** - Kicks specified user \n **ban** - Bans specified user \n **mute** - Mutes specified user \n **unmute** - Unmutes specified user \n **purge** - Deletes specified amount of messages \n **say** - Dictates message" )


  .addField("Administrator Commands","**rank** - Ranks user in roblox group \n **shout** - Sends a roblox shout")

  msg.author.send(help);
  msg.channel.send("**Check your DMs, commands have been sent!**")
  .then(function (msg) {
              msg.react("✅")
})}
