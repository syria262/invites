const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

///////////كود تكت
client.on("message", message => {
  let tchannels = [];
  let role = "Support";
  if (message.content.startsWith(prefix + "new")) {
    let cantfind = new Discord.RichEmbed().setDescription(
      `اسف انا لاجد رتبة ${role}`
    );
    let role1 = message.guild.roles.find(role => role.name === "Support");
    let role2 = message.guild.roles.find(role2 => role2.name === "@everyone");
    if (!role1) return message.channel.send(cantfind);
    let Reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!Reason) return message.channel.send("من فضلك ضع سبب لفتح التكت");
    message.guild
      .createChannel(`ticket-${message.author.username}`, "text")
      .then(channel => {
        channel.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        channel.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        channel.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        let done = new Discord.RichEmbed().setDescription(
          ` لقد تم فتح التكت <#${channel.id}> `
        );
        let embeds = new Discord.RichEmbed()
          .addField(`تكت , بوت`, `من فضلك انتظر الادارة  `)
          .addField(`سبب فتح التكت`, Reason);
        channel.send(embeds);
        message.channel.send(done);
      });
  }
    if (message.content.startsWith(prefix + "rename")) {
      let eme = new Discord.RichEmbed().setDescription("❌ لا يمكنك كتابة هذا الامر هنا من فضلك توجه للتكت المراد تغيير اسمه وكتابة الامر!")
    if (!message.channel.name.startsWith(`ticket-`))
      return message.channel.send(eme);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("Your Must Have Permission");
    let args = message.content.split(" ").slice(1).join("");
    message.channel.setName(`ticket-${args}`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send("I Must Have Permission");
    let embed = new Discord.RichEmbed().setDescription(
      `\`\`\`\ لقد تم تغير اسم التكت الى  [ ticket-${args} ] \`\`\`\ `
    );
    message.channel.send(embed);
  }
  if(message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `close`)) {    

     const d11x1xx = new Discord.RichEmbed()
     .setDescription("❌ You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor(embedFail);
    
         const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription("❌ لا يمكنك كتابة هذا الامر هنا من فضلك توجه للتكت المراد اغلاقه وكتابة الامر!")  
     .setColor(embedFail);
    if (!message.channel.name.startsWith("ticket-")) 
      return message.channel.send(d11x1xxNOT);
     const yes = new Discord.RichEmbed()
     .setDescription(`❌ هل انت متأكد من قفل هذا التكت ؟ يرجة ارسال هذا الامر \`\`${prefix}close\`\` مرة اخرى لأغلاق التكت.\nلديك 20 ثانية فقط.`)  
     .setColor(embedColor);

    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        }) 
       .catch(() => {
          const yesw = new Discord.RichEmbed()
     .setDescription(`❌ لقد انتهى الامر لم يقم احد بإلاق التكت.`)  
     .setColor(embedFail);
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
  
});
///////////كود مراسلة صاحب البوت
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild) return;

    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let embedd = new Discord.RichEmbed()
      .setDescription(`اسم السيرفر : ${message.guild.name} 
من : ${message.author}
الرسالة : ${args}`);
    client.users.get("669859185218813952").send(embedd);

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription("📬 تم ارسال الرسالة الى صاحب البوت بنجاح")
      .setThumbnail(message.author.avatarURL);

    message.channel.send(embed);
  }
});
///////////كود الهلب
client.on("message",message =>{
if (message.content.startsWith(prefix + "help")) {
  var embed = new Discord.RichEmbed()
  .setTitle("Help")
  .setDescription(`**         (تكت ,بوت)

1-البوت فيه مزايا حلوة 
2-البوت شغال 24 ساعة
3-البوت عربي بالكامل

اوامر الاعضاء
${prefix}new لفتح تكت (السبب)
 Soon...

اوامر الادارة 
${prefix}rename لتغيير اسم التكت
${prefix}close لإغلاق التكت
${prefix}7maya لإظهار أوامر الحماية 
Soon...

ملاحظة : يجب اعطاء البوت رتبة اسمها Support


اوامر اخرى
للتكلم مع صاحب البوت contact${prefix}
${prefix}support لدخول سيرفر السبورت حق البوت
${prefix}linkBot لإدخال البوت لسيرفرك 
اي اقتراح لديك ارسله في خاص البوت 



وشكرا اتمنى البوت يعجبكم
**`)
message.channel.send(embed)
}}) 
///////////كود سيرفر السبورت
client.on("message",message =>{
if (message.content.startsWith(prefix + "support")) {
  var embed = new Discord.RichEmbed()
  .setTitle("سيرفر السبورت")
  .setDescription(`https://discord.gg/6EYA8wW`)
  message.react("✅");
message.author.send(embed)
}}) 
///////////كود رابط البوت
client.on("message",message =>{
if (message.content.startsWith(prefix + "linkBot")) {
  var embed = new Discord.RichEmbed()
  .setTitle("رابط البوت")
  .setDescription(`https://discord.com/api/oauth2/authorize?client_id=715317191251329166&permissions=8&scope=bot`)
  message.react("✅");
message.author.send(embed)
}})
///////////كود رابط البوت
client.on("message",message =>{
if (message.content.startsWith(prefix + "linkbot")) {
  var embed = new Discord.RichEmbed()
  .setTitle("رابط البوت")
  .setDescription(`https://discord.com/api/oauth2/authorize?client_id=715317191251329166&permissions=8&scope=bot`)
  message.react("✅");
message.author.send(embed)
}}) 

client.on("guildCreate", guild => {
  client.channels.get("716787982497087498")
    .send(`✅ **${client.user.tag} البوت دخل سيرفر 
Server name: ${guild.name}
Server owner: ${guild.owner}
Server id: ${guild.id} 
Server Count: ${guild.memberCount}
عدد السيرفرات  : ${client.guilds.size}**`);
});

client.on("guildDelete", guild => {
  client.channels.get("716788089602965595")
    .send(`❎ **${client.user.tag} البوت طلع من سيرفر
Server name: ${guild.name}
Server owner: ${guild.owner}
Server id: ${guild.id} 
Server Count: ${guild.memberCount}
عدد السيرفرات  : ${client.guilds.size}**`);
});

const yourID = "669859185218813952"; // ID
const setupCMD = "#activterole"
let initialMessage = ``;
const roles = ["Member"];// اسم رتب
const reactions = ['✅'];// ايموجى
 


if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
 

function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
     for (let role of roles) messages.push(` **"${role}"** 

**لإظهار الشاتات والرومات فعل نفسك بالضغط على الرياكشن**`); 
    return messages;
}
 
 
client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }
})
 
client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
       
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
       
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
       
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
               
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }  
});

client.on("message", light => {
  let devs = "669859185218813952";
  let args = light.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (!devs.includes(light.author.id)) return;
  if (!light.channel.guild || light.author.bot) return;
  if (!args) return;
  if (light.content.startsWith(prefix + `setname`)) {
    client.user.setUsername(args);
    light.channel.send(`Changed To ,  ${args}`);
  }
  if (light.content.startsWith(prefix + `setavatar`)) {
    client.user.setAvatar(args);
    light.channel.send(`Done.`);
  }
});


client.on("message",message =>{
if (message.content.startsWith(prefix + "مالك دخل فينننن")) {
  var embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setDescription(`مرحباً بك في سيرفر تكت بوت، رجاءًا قم بقراءه القوانين بعنايه..

 1 - **لا تمنشن الإدارة** , فهذا يعتبر مزعج لهم.
 2 - **لا تقم بنشر روابط سيرفرات أخرى** ، فهذا قد يكون سبب في تبنيدك.
 3 - **لاتتحدث بالامور السياسية و الدينية** ، كل شخص وله تفكير.
 4 - **ارجو حل المشاكل الشخصيه في الخاص** ، فـنحن لا نحب ذلك.
 5 - **لا تتحدث عن بوتات أخرى** ، هذا السيرفر الخاص تكت بوت ليس قائمة البوتات العامة.
 6 - **لا تقم بنشر الصور الاباحية، الحساسة** ، فهذا ممنوع منعاً باتاً.
 7 - اذا كان لديك مشكلة او سؤال ،** قم بمنشنة @Support ar  ، مرة واحدة ، ولا تكن مزعج.
 8 - **لا تراسل الإدارة على الخاص لطلب المساعدة** ، سيرفر الدعم ليس زينة.
 9 - **لا يُسمح بتكرار الرسائل**، الصور، المنشن ، هذا يؤدي الى اعطائك ميوت.
 10 - **لايُسمح بتكرار الإقتراحات** ، فهذا قد يعرضك للتحذير.
 11 - **لا تقم بذكر أسامي سيرفرات خارجيه** ، فهذا قد يعرضك للتحذير.
 12 - **لا تهين الآخرين** ، كن لطيفاً.
 
 - **تنويه** : يجب الحذر من تعاملك مع اي شخص خارج طاقم الدعم الفني لتكت بوت..
 ونخلي مسؤوليتنا من التعامل معهم تماماً..
 
 لطلب المساعدة ، يرجى التوجه لـ <#716760368063578142>..
                    `)
message.channel.send(embed)
}}) 


let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 10
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 10
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 10
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 10
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 10
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 10
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 10
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

var antibots = JSON.parse(fs.readFileSync("./KickBots.json", "utf8"));
let saveSteve = () => {
  fs.writeFileSync(
    "./KickBots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    config[message.guild.id] = {
      onoff: true
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: true
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is On :closed_lock_with_key: **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: false
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is Off :unlock: **");
  }
  saveSteve();
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    config[member.guild.id] = {
      onoff: true
    };
  if (antibots[member.guild.id].onoff == false) return;
  if (member.user.bot) return member.ban("Protection from Bots.");
  saveSteve();
});

client.on("message",message =>{
if (message.content.startsWith(prefix + "7maya")) {
  var embed = new Discord.RichEmbed()
  .setTitle("حـــــــمــــــــايـــــــــة")
  .setDescription(`اوامر الحماية

دخول بوتات
${prefix}antibots on/off 
طرد الاعضاء
${prefix}settings limitskick 1/2/3/4
تبنيد الاعضاء
${prefix}settings limitsban 1/2/3/4
حذف رتب
${prefix}settings limitsroleD 1/2/3/4
انشاء رتبة
${prefix}settings limitsroleC 1/2/3/4
حذف روم
${prefix}settings limitschannelD 1/2/3/4
انشاء روم
${prefix}settings limitschannelC 1/2/3/4

1/2/3/4 = العدد

`)
message.channel.send(embed)
}}) 


client.login(process.env.BOT_TOKEN)
