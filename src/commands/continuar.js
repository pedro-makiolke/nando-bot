const { GuildMember } = require('discord.js')

module.exports = {
    name:'continuar',
    description:"Continua a música",
    group:"music",

    run: async(player, interaction) => {
        if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel) {
            return void interaction.reply({
                content: 'ENTRA NUM CANAL DE VOZ BURRO',
                ephemeral: true,
            });
        }
    
        if (
            interaction.guild.me.voice.channelId &&
            interaction.member.voice.channelId !== interaction.guild.me.voice.channelId
        ) {
            return void interaction.reply({
                content: 'TAMO EM CANAL DIFERENTE LERDAOKK',
                ephemeral: true,
            });
        }

        await interaction.deferReply();

        const fila = player.getQueue(interaction.guildId);
        if (!fila || !fila.playing)
          return void interaction.followUp({
            content: 'NÃO TEM NADA TOCANDO KEEL',
          });
        const success = fila.setPaused(false);
        return void interaction.followUp({
          content: success ? '▶ | VAI PORRA!' : '❌ | DEU RUIM DISGRAÇAAAAAAAAAAA',
        });
    }
}