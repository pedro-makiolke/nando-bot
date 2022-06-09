const { GuildMember } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
  name: 'tocar',
  description: 'Toca uma música ai',
  group: 'music',
  options: [
    {
      name: 'query',
      type: 3,
      description: 'O nome da musica fi',
      required: true,
    },
  ],
  run: async (player, interaction) => {
    try {
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

      const query = interaction.options.get('query').value;
      const searchResult = await player
        .search(query, {
          requestedBy: interaction.user,
          searchEngine: QueryType.AUTO,
        })
        .catch(() => { });
      if (!searchResult || !searchResult.tracks.length)
        return void interaction.followUp({
          content: 'ALA SABE NEM PESQUISAKKKKKKKKKK'
        });

      const queue = await player.createQueue(interaction.guild, {
        ytdlOptions: {
          quality: "highest",
          filter: "audioonly",
          highWaterMark: 1 << 25,
          dlChunkSize: 0,
        },
        metadata: interaction.channel,
      });

      try {
        if (!queue.connection) await queue.connect(interaction.member.voice.channel);
      } catch {
        void player.deleteQueue(interaction.guildId);
        return void interaction.followUp({
          content: 'DEU P ENTRA NAO',
        });
      }

      await interaction.followUp({
        content: `PERA AI ${searchResult.playlist ? 'DESGRACA' : 'DESGRACA'}...`,
      });
      searchResult.playlist ? queue.addTracks(searchResult.tracks) : queue.addTrack(searchResult.tracks[0]);
      if (!queue.playing) await queue.play();
    } catch (error) {
      console.log(error);
      interaction.followUp({
        content: 'COMO PULA?: ' + error.message,
      });
    }
  },
};
