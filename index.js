
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

const ROLE_ID = "1530910734886764705";

client.on("guildMemberUpdate", async (oldMember, newMember) => {
  if (
    !oldMember.roles.cache.has(ROLE_ID) &&
    newMember.roles.cache.has(ROLE_ID)
  ) {
    try {
      await newMember.ban({ reason: "تم أخذ الرول الممنوع" });
      console.log(`${newMember.user.tag} تم حظره.`);
    } catch (err) {
      console.error(err);
    }
  }
});

client.once("ready", () => {
  console.log(`تم تشغيل ${client.user.tag}`);
});

client.login(process.env.TOKEN);
