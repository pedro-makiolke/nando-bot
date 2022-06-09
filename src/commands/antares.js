module.exports = {
    name:'antares',
    description: 'EH O ANTARES PORRA',

    run: async(client, interaction) => {
        const content = `

        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        ✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵✌🥵EH O ANTARES✌🥵
        
        `;

        await interaction.deferReply();

        await interaction.followUp({
            ephemeral:true,
            content
        });
    }
}