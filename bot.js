const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "welcome");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":running_shirt_with_sash: | name :  ", `${member}`)
    .addField(
      ":loudspeaker: | نورت السيرفر يا قلبي",
      `Welcome to the server, ${member}`
    )
    .addField(":id: | user :", "**[" + `${member.id}` + "]**")
    .addField("➡| انت العضو رقم", `${member.guild.memberCount}`)

    .addField("Name:", `<@` + `${member.id}` + `>`, true)

    .addField(" الـسيرفر", `${member.guild.name}`, true)

    .setFooter(`${member.guild.name}`)
    .setTimestamp();

  channel.sendEmbed(embed);
});

client.on("guildMemberRemove", member => {
  var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
    .setDescription(
      `مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `
    )
    .addField(
      ":bust_in_silhouette:   تبقي",
      `**[ ${member.guild.memberCount} ]**`,
      true
    )
    .setColor("RED")
    .setFooter(
      `==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`,
      "https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png"
    );

  var channel = member.guild.channels.find("name", "welcome");
  if (!channel) return;
  channel.send({ embed: embed });
});



client.login(process.env.BOT_TOKEN)
