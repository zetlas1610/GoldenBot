const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableeveryone: true });

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) msg.channel.send("Pong!");
  if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 3000 }).then(console.log("Message supprimé"));
  }
  if (cmd === `${PREFIX}role`) {
    const channel = client.channels.find(r => r.name === "logs");
    const role = msg.guild.role.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("Ce role n'existe pas !");
    if (msg.member.roles.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`J'ai supprimé le role ${role} a ${msg.author}.`);
      msg.delete({ timeout: 3000 });
    } else {
      msg.member.roles.add(role);
      channel.send(`J'ai ajouter le role ${role} a ${msg.author}.`);
      msg.delete({ timeout: 3000 });
    }
  }
});

client.on("guildMemberAdd", member => {
  member.send("Salut a toi!");
  const channel = client.channels.find(r => r.name === "general");
  channel.send(`${member} a rejoint le serveur !`);
});

client.login(TOKEN);

// ------------------------------------------

client.on("ready", () => console.log("Je suis lancer !"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.debug);
