exports.run = (client, msg, args, points) => {
  const roblox = require("roblox-js");
  const username = "username"
  const password = "password"
  const groupid = 12345
  try {

      roblox.login(username, password)
      .then(function () {
          (async function(){
              const user = await roblox.getIdFromUsername(args.shift(" "))
              const target = await parseInt(args.shift(" "));
              console.log(target, user);
              const p = await roblox.setRank(groupid, user, target)
              msg.reply("Successfully ranked " + user + ".")
          })()
          .catch(function (e) {
              console.log(e);
          })
      })

  } catch (e) {



  }};
