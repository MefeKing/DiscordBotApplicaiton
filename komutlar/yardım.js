const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setAuthor("Server Stat", client.user.avatarURL)
    .setTitle("Maximus Stat")
    .setColor("ORANGE")
    .setDescription("Sunucu İstatistiğini Gösteren Bir Bot!")
    .addField(
      "k!afk | **Sizi afk bırakır**",
      "k!ailemiz| **Botun olduğu sunucular hakkında bilgi verir**",
      "k!alevlogo | **Alevli bir logo oluşturur**",
      "k!altınlogo | **Altın bir logo oluşturur**",
      "k!animefont| **Yazdığınız yazıyı dinamik çevirir**",
      "k!anket| **Bu komutla anket oluşturulur **",
      "k!ara155| **eğlence komutudur**",
      "aşkölçer| **eğlence komutudur aşkınızı ölçer .d**",
      "k!atam| **Atatürk'ün rastgele fotoğrafını atar**",
      "k!avatar| **PP'nizi atar**",
      "k!balıktut| **Eğlence komutudur balık tutarsınız .d**",
      "k!ban-sorgula| **ban sorgular**",
      "k!bakım| **sunucuyu bakıma sokar**",
      "k!ban| **belirtilen kişiyi banlar**",
      "caps-engel| **caps-lock engeller**",
      "cowsay| **eğlence komutudur xd**",
      "k!çekiliş|  **çekiliş oluşturur**",
      "k!çeviri|  **Kelimeleri çevirmeye yara (**",
      "yakında|  **yakında**",
      "yakında|  **yakında**",
      "yakında|  **yakında**",
      "yakında|  **yakında**",

    )
    .setTimestamp()
    .setFooter("© Server Stat", client.user.avatarURL);
  message.channel.send(Embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Bu komut ile sunucudaki komutları öğrenirsiniz",
  usage: "yardım"
};
