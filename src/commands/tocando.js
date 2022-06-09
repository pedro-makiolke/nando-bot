const {GuildMember} = require('discord.js');

module.exports = {
    name: "tocando",
    description: "Tocando agora",
    group: "music",

    run: async (player, interaction) => {
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
                content: 'MAS NÃO TA TOCANDO NADA NÉ ANIMAL',
            });

        const progress = fila.createProgressBar();
        const perc = fila.getPlayerTimestamp();

        return void interaction.followUp({
            embeds: [
                {
                    title: 'TA TOCANDO ESSA MERDA AI',
                    description: `🎶 | **${fila.current.title}**! (\`${perc.progress}%\`)`,
                    fields: [
                        {
                            name: '\u200b',
                            value: progress,
                        },
                    ],
                    color: 0xffffff
                }
            ]
        })
    }
}