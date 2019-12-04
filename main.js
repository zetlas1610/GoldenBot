const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableeveryone: true });

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) msg.channel.send("Pong!");
});

client.on("guildMemberAdd", member => {
  member.send("Salut a toi!");
  const channel = client.channels.find(r => r.name === "general");
  channel.send(`${member} a rejoint le serveur !`);
});

client.login("TOKEN");

// ------------------------------------------

client.on("ready", () => console.log("Je suis lancer !"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.debug);
