const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

client.on('ready', () => {
  console.log('\n\n\n' + config.name + '\n\nVersion: ' + config.version);
  client.user.setPresence({type: 1});
});

client.on('message', msg => {
if (!msg.content.startsWith(config.prefix)) return;
if (msg.author.bot) return;

if(msg.channel.type == "dm") return msg.author.send("I cannot receive private messages. To use a command, do it in an EssentialBot server.");



  let usr = msg.member.id

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);
  let pointsf = fs.readFileSync('./points.json');
  let points = JSON.parse(pointsf);


  let admins = {
      ["420036907406327808"]: true // Crxzy
  }

// Start of command's
// Start of command's
// Do not mess with

if(msg.member.hasPermission("MANAGE_MESSAGES") || (admins[usr])) {

// Class 1 / Moderator Commands

if (command === "purge") {
    let purge = require(`./commands/purge.js`)
    console.log(purge)
    purge.run(client, msg, args)
} else

if (command === "say") {
    let say = require(`./commands/say.js`)
    console.log(say)
    say.run(client, msg, args)
} else

if (command === "ban") {
  let banner = require("./commands/ban.js");
  console.log(banner);
  banner.run(client, msg, args)
} else

if (command === "kick") {
  let kick = require("./commands/kick.js");
  console.log(kick);
  kick.run(client, msg, args)
} else

if (command === "mute") {
    let mute = require("./commands/mute.js");
    console.log(mute);
    mute.run(client, msg, args);
} else

if (command === "warn") {
    let warn = require("./commands/warn.js");
    console.log(warn);
    warn.run(client, msg, args);
} else

if (command === "unmute") {
    let unmute = require("./commands/unmute.js");
    console.log(unmute);
    unmute.run(client, msg, args);
}

} // Public commands

if (command === "help") {
    let help = require(`./commands/help.js`)
    console.log(help)
    help.run(client, msg, args)
} else

if (command === "yesorno") {
    let yesorno = require(`./commands/yesorno.js`)
    console.log(yesorno)
    yesorno.run(client, msg, args)
} else

if (command === "say") {
    let say = require(`./commands/say.js`)
    console.log(say)
    say.run(client, msg, args)
} else

if (command === "ping") {
    let ping = require(`./commands/ping.js`)
    console.log(ping)
    ping.run(client, msg, args)
} else

if (command === "8ball") {
    let eightball = require(`./commands/8ball.js`)
    console.log(eightball)
    eightball.run(client, msg, args)
} else

if (command === "joinsupport") {
    let joinsupport = require(`./commands/joinsupport.js`)
    console.log(joinsupport)
    joinsupport.run(client, msg, args)
} else

if (command === "points") {
  let cp = require("./commands/points.js");
  console.log(cp)
  cp.run(client, msg, args, points)
} else

if (command === "botinfo") {
    let botinfo = require(`./commands/botinfo.js`)
    console.log(botinfo)
    botinfo.run(client, msg, args)
}

// X CLASS [owner only]

if (admins[usr]) {

  if (command === "status") {
  let status = require("./commands/status.js");
  console.log(status);
  status.run(client, msg, args);
} else

  if (command === "givepoints") {
  let ap = require("./commands/addPoints.js");
  console.log(ap);
  ap.run(client, msg, args, points, fs);
} else

if (command === "rank") {
    let rank = require("./commands/rank.js");
    console.log(rank);
    rank.run(client, msg, args);
} else

if (command === "shout") {
    let shout = require("./commands/shout.js");
    console.log(shout);
    shout.run(client, msg, args);
}
}

}




);

client.login(config.token);
