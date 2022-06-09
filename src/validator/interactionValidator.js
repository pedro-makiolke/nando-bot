const { GuildMember } = require("discord.js");

//TODO: usar para validar se o cara ta no canal de voz
module.exports = (interaction) => {
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
}