const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require('quick.db');
  

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  let args = message.content.split(' ').slice(1);
  const secenekler = args.slice(0).join(' ');

  if(secenekler.length < 1) return message.reply(`**${prefix}seviye-sistem aç** veya **${prefix}seviye-sistem kapat** yazınz `);
  //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply(`**${prefix}seviye-sistem aç** veya **${prefix}seviye-sistem kapat** yazınz `)
  
  if (secenekler === "aç" || secenekler === "on") {
    
    var i = db.set(`lvll_${message.guild.id}`, "acik")
    
      const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`Seviye Sistem Başarıyla açıldı\nSeviye sistemini kapatmak isterseniz **${prefix}seviye-sistem kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)
    /*let kufurEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
 if(!kufurEngel[message.guild.id]){
    kufurEngel[message.guild.id] = {
      kufurEngel: "acik"
      };
  };

      fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(kufurEngel), (x) => {
        if (x) console.error(x)
      })*/

  };

  if (secenekler === "kapat" || secenekler === "off") {
    
    //var i = db.set(`küfürE_${message.guild.id}`, "kapali")
    
    db.delete(`lvll_${message.guild.id}`)
    
    message.channel.send('Seviye sistemi kapatıldı.')
  /*let kufurEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
  if(!kufurEngel[message.guild.id]){
    kufurEngel[message.guild.id] = {
      kufurEngel: "kapali"
      };
  };

    fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(kufurEngel), (x) => {
        if (x) console.error(x)
      })
    
    if (kufurEngel[message.guild.id]) {
    delete kufurEngel[message.guild.id]
    delete kufurEngel[message.guild.id].kufurEngel
    }*/
    
  };
}

exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: [],
		permLevel: 4,
    kategori: "seviye",
	};

module.exports.help = {
  name: 'seviye-sistem',
  description: 'seviye-sistem aç kapat.',
  usage: 'seviye-sistem'
};