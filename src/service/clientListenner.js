module.exports = (player, client) => {
    client.once('ready', async() => {
        client.user.setActivity("Destiny", { type: "Jogando"})
    })

    client.on('messageCreate', async message => {
        if (message.author.bot || !message.guild) return;
        if (!client.application?.owner) await client.application?.fetch();
      
        if (message.content === '!funcionafodido' && message.author.id === client.application?.owner?.id) {
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