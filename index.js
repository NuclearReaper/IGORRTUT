/* eslint consistent-return: 0, no-console: 0 */
const Discord = require('discord.js');

const config = require('./config.json');

const { Client, RichEmbed } = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'Вложение1') {
    const embed = new RichEmbed()
    .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("ёпта", "http://i.imgur.com/w1vhFSR.png")
  .setImage("https://images2.domashnyochag.ru/upload/img_cache/cfd/cfd9dd3c5f2f3eb57384d836e0cf7a65_ce_1000x555x0x97_cropped_930x510_fitted_1260x700.jpg")
  .setThumbnail("https://st.kp.yandex.net/images/actor_iphone/iphone360_3098539.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Азазазазаз нахуй",
    "Сукабля")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
  message.delete()
    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content === 'Вложение') {
    const embed = new RichEmbed()
    .setTitle('Приключения Арсения')
    .setColor(0xFF0000)
    .setDescription('Часть 2')
    .setThumbnail("https://media.discordapp.net/attachments/491209089360068611/491934166242557953/afsasfafs.jpg");
    message.delete()
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Кто мамаша Арсения?")) {
    message.delete()
    message.author.send("Блядина подзаборная ёпта");
  } else
 
  if (message.content.startsWith("Игорь принимает правила и вступает в игру")) {
    message.channel.send("Арсений принимает за правило - сосать мой хуй");
  } else
 
  if (message.content.startsWith("Где Игорь?")) {
    message.delete();
    message.author.send("Да Игорь здесь, Игорю просто нахуй похуй");
  } else
 
  if (message.content.startsWith("Твой еще меньше, пидор")) {
    message.channel.send("Пидор - это твой батя бля")
    message.channel.send("Сука, придушу хуём в захвате если сейчас же не заткнёшь ебало своё, хуепутало бля");
  } else
 
  if (message.content.startsWith("Игорь, не обижай Сенечку")) {
    message.reply("А иначе что бля?")
    message.channel.send("Сенечка нажалуется своей мамаше шлюхе?")
    message.channel.send("Вскроет себе вены?")
    message.channel.send("Расстроится и выебет лошадь?")
    message.author.send("Чморить Арсения - это святое")
    message.author.send("Один раз почморил")
    message.author.send("Второй раз с локтя")
    message.author.send("И Арсений целый месяц в запое");

  } else
 
  if (message.content.startsWith("Кто Арсений по жизни")) {
    message.delete();
    message.author.send("Пидарюга")
    message.author.send("Конеёбище")
    message.author.send("Недостароста")
    message.author.send("Хуепутало")
    message.author.send("Ещё Саней притворяется, но он всё равно Арсений");
  }
});

client.on('message', (message) => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if (command === 'скажи') {
    if (message.author.id !== "467229992124940299") return message.reply('Пошел нахуй, сам скажи если надо');
    message.channel.send(args.join(' '));
    message.delete();

if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Директор Предприятия"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Директор Предприятия"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(process.env.BOT_TOKEN);
