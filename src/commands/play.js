module.exports = {
    name:"play",
    description:"?",
    options: [
        {
          name: 'query',
          type: 3, 
          description: 'the music here',
          required: true,
        },
      ],
    
    run: async (client, interaction) => {
        const content = "AFF TOMA NO CU, TA TUDO INGREIS";

        await interaction.deferReply();

        await interaction.followUp({
            ephemeral:true,
            content
        });
    }
}