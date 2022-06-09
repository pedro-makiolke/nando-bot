module.exports = {
    name:"teste",
    description:"testando",
    type:"CHAT_INPUT",
    
    run: async (client, interaction) => {
        const content = "TUA MAE AQUELA GORDA";

        await interaction.deferReply();

        await interaction.followUp({
            ephemeral:true,
            content
        });
    }
}