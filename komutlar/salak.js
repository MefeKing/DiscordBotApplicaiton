const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setImage("https://tenor.com/view/hee-salak-hee-he-salak-he-salak-mal-aptal-gif-18847315")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'salak', 
    description: 'salak', 
    usage: 'salak'
};