const respostas = require('../respostas/respostas')

module.exports = (player, client) => {
    client.once('ready', async() => {
        client.user.setActivity("Destiny", { type: "PLAYING"})
    })

    client.on('messageCreate', async message => {
        if (message.author.bot || !message.guild) return;
        if (!client.application?.owner) await client.application?.fetch();

        if (message.content === '!funciona' && message.author.id === client.application?.owner?.id) {
          await message.guild.commands
            .set(client.commands)
            .then(() => {
              message.reply('Toma no rabo disgraça');
            })
            .catch(err => {
              message.reply('Deu pau');
              console.error(err);
            });
        }

        console.log(client.user, message.guild, message.content)
        if(message.content.includes('984497168012419147')){
            let index = Math.random(0, respostas.respostas.length-1);
            message.reply(respostas.respostas[Math.round(index)]);
        }
      });

    client.on('interactionCreate', async interaction => {
        const command = client.commands.get(interaction.commandName.toLowerCase());
        try {
            if(command.group === 'music'){
                command.run(player, interaction);
            } else {
                command.run(client, interaction);
            }
        } catch (error) {
            console.log(error)
            interaction.followUp({
                content:"Como joga isso Keel?",
            })
        }
    })
}