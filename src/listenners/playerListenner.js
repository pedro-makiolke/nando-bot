module.exports = (player) => {

    player.on('trackAdd', (fila, musica) => {
        fila.metadata.send({            
            embeds: [
            {
                title: 'MUSICA ADICIONADA NA FILA',
                description: `🎶 | **${musica.title}**`,
                color: 0xffffff
            }
        ]})
    })

    player.on('botDisconnect', fila => {
        fila.metadata.send("🤬 | QUEM FOI O CORNO?")
    })

    player.on('channelEmpty', queue => {
        queue.metadata.send("😎 | NÃO SOBRO UM CORNO KKKKKKKKKK");
      })
      
    player.on('queueEnd', queue => {
      queue.metadata.send("🐣 | ACABO ESSA MERDA");
    })
}