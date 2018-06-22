const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("as!")

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Asvox.fr (Bientôt)', type: 0}})
    console.log("Je viens de me connecter !");
});

bot.login('NDU3OTIxNzYzMzA1NTg2NzA5.DggUng.jtm1-_Ek6nMXAC5yIsK9bGyj4Wc')

bot.on('message', message => {
    if (message.content === prefix + "roles"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#029AC0')
        .addField("Les roles", "En cours de création !")
        .setFooter('Créateur @Exalty Néo !')
        message.channel.sendEmbed(help_embed);
        console.log('Un jouer à executé la commande roles')
    }

    if (message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#D18502')
        .addField("Interactif", "Bientôt")
        .addField("YOUTUBE", "Retrouvez les videos de Asvox !\nhttps://www.youtube.com/channel/UC1lwRQiSGFdauFzohKf7n_w")
        .addField("TOURNOI", "Bientôt")
        .addField("NEWS", "Retrouvez les actualités\ndans se salon : #actualité")
        .addField("ANIMATION", "Retrouvez les animations\ndans se salon : (SOON)")
        .setFooter('Créateur @Exalty Néo !')
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n - /help pour afficher les commandes");
        console.log("Un joueur à executé la commande aide !");
    }
    
});