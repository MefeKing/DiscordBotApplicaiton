const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://discord.com/assets/ee7c382d9257652a88c8f7b7f22a994d.png"
            },
			    "thumbnail": {
				 "url": "https://discord.com/assets/ee7c382d9257652a88c8f7b7f22a994d.png"
			},
            title: "",
            description: "[Davet Linkim](https://discord.com/oauth2/authorize?client_id=790551743033114664&scope=bot&permissions=40) \n[Destek Sunucusu](https://discord.gg/k3WTRzVsHt)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "King Bot"
            }
          }
        });
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
