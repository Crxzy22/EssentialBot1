exports.run = (client, msg, args, points) => {
  const roblox = require("roblox-js");
  const username = "username"
  const password = "password"
  const groupid = 12345
  try {

      roblox.login(username, password)
      .then(function () {
          (async function() {
              const text = await args.join(" ");
              const p = await roblox.shout(groupid, text)
              msg.reply("Sucessfully shouted " + text);
          })()
          .catch(function (e) {
              console.log(e);
          })
      })

  } catch (e) {



  }};
