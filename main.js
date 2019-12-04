const { Client } = require("discord.js");
const client = new Client({ disableeveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone, salut tout le monde", {
      disableEveryone: true
    });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone), salut tout le monde");
});

client.login("NDYyNzA4MTEzNzIwNjA2NzIx.Xege2g.shizgBbZbAT7-iRDSDpwmHGoqdY");
