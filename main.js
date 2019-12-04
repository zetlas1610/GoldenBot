const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableeveryone: true });

client.on("ready", () => {
  console.log("Je suis lancer !");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("Pong!");
});

client.login("TOKEN");
