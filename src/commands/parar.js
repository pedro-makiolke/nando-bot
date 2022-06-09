const { GuildMember } = require('discord.js');

module.exports = {
  name: 'paraporra',
  description: 'PARA TUDO NESSA MERDA TB',
  group: 'music',

  async run(player, interaction) {
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

    const queue = player.getQueue(interaction.guildId);
    if (!queue || !queue.playing)
      return void interaction.followUp({
        content: 'MAS NÃO TA TOCANDO NADA NÉ ANIMAL',
      });
    queue.destroy();
    return void interaction.followUp({
      content: "TOMA NO CU COM ESSA MERDA TAMBÉM"
    });
  },
};
