module.exports = (player) => {

    player.on('trackAdd', (fila, musica) => {
        fila.metadata.send({            
            embeds: [
            {
                title: 'MUSICA ADICIONADA NA FILA',
                description: `ð¶ | **${musica.title}**`,
                color: 0xffffff
            }
        ]})
    })

    player.on('botDisconnect', fila => {
        fila.metadata.send("ð¤¬ | QUEM FOI O CORNO?")
    })

    player.on('channelEmpty', queue => {
        queue.metadata.send("ð | NÃO SOBRO UM CORNO KKKKKKKKKK");
      })
      
    player.on('queueEnd', queue => {
      queue.metadata.send("ð£ | ACABO ESSA MERDA");
    })
}